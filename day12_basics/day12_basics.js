// helpers
function fakeFetchOne() {
    return Promise.resolve("step1");
}

function fakeFetchTwo(prev) {
    return Promise.resolve(prev + "_step2");
}

function fakeUser() {
    return Promise.resolve({ id: 1, name: "John" });
}

function fakeSteps() {
    return Promise.resolve({ steps: 7200 });
}

function fakeHeartRate() {
    return Promise.resolve({ bpm: 82 });
}

function fakeSlowFetch() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ status: 200, data: "OK" }), 3000);
    });
}

function fetchData() {
    return Promise.resolve("DATA");
}


// exercise 1 - sequential
async function fetchSequential() {
    const a = await fakeFetchOne();
    const b = await fakeFetchTwo(a);
    return b;
}


// exercise 2 - parallel
async function fetchParallel() {
    const [user, steps, heartRate] = await Promise.all([
        fakeUser(),
        fakeSteps(),
        fakeHeartRate()
    ]);
    return { user, steps, heartRate };
}


// timeout wrapper
function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject("Timeout"), ms)
    );
    return Promise.race([promise, timeout]);
}


// exercise 3 - load with timeout
async function loadWithTimeout() {
    return withTimeout(fakeSlowFetch(), 2000);
}


// retry helper
async function retry(fn, retries = 3) {
    try {
        return await fn();
    } catch (err) {
        if (retries <= 1) throw err;
        return retry(fn, retries - 1);
    }
}

// exercise 4 - fetch with retry (fails twice then succeeds)
let failCount = 0;
function unstableFetch() {
    if (failCount < 2) {
        failCount++;
        return Promise.reject("fail");
    }
    return Promise.resolve("success");
}

async function fetchWithRetry() {
    return retry(unstableFetch, 3);
}


// debounce
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const messages = [];
const debounceLog = debounce(msg => messages.push(msg), 300);

// simulate debounce calls
debounceLog("hello");
debounceLog("hello");
debounceLog("hello");


// throttle
function throttle(fn, limit) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= limit) {
            last = now;
            fn(...args);
        }
    };
}

const events = [];
const throttleLog = throttle(msg => events.push(msg), 500);

// simulate throttle calls
throttleLog("hi");
throttleLog("hi");
throttleLog("hi");

console.log(events);
setTimeout(() => {
    console.log(messages);
}, 400);
