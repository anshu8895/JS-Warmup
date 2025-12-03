// Polyfills
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const shouldInclude = callback(this[i], i, this);
        if (shouldInclude) result.push(this[i]);
    }
    return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
    if (initialValue === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFind = function (callback) {
    let firstValue;
    for (let i = 0; i < this.length; i++) {
        firstValue = callback(this[i], i, this);
        if (firstValue) return this[i];
    }
};

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) return true;
    }
    return false;
};
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) return false;
    }
    return true;
};

// Function polyfills
Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;
    context._tempFn = this;
    const result = context._tempFn(...args);
    delete context._tempFn;
    return result;
};

Function.prototype.myApply = function (context, argsArray) {
    context = context || globalThis;
    context._tempFn = this;
    argsArray = argsArray || [];
    const result = context._tempFn(...argsArray);
    delete context._tempFn;
    return result;
};

// Event emitter
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName, data) {
        if (!this.events[eventName]) return;
        this.events[eventName].forEach(callback => callback(data));
    }
    off(eventName, callback) {
        if (!this.events[eventName]) return;
        this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
    }
}


// heart rate simulation using eventEmitter
const device = new EventEmitter();

function logHR(hr) {
    console.log("HR:", hr);
}
device.on('data', logHR);

device.on("alert", hr => console.log("⚠️ ALERT! HIGH HEART RATE:", hr));

function sendHeartRate() {
    const hr = Math.floor(Math.random() * 91 + 60);
    device.emit('data', hr);

    if (hr > 120) {
        device.emit('alert', hr);
    }
}

const intervalId = setInterval(() => {
    sendHeartRate();
}, 500);

setTimeout(() => {
    console.log("❌ Removing data listener");

    device.off('data', logHR);
}, 5000);
