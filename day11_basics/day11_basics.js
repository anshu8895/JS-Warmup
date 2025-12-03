const p1 = Promise.resolve('done');

const p2 = Promise.resolve(5);
const p2Final = p2
    .then(value => value + 5)
    .then(value => value * 2)
    .then(value => value - 3);

async function compute() {
    return 10;
};
const p3 = compute();

const order = [];
order.push('A');
Promise.resolve().then(() => order.push('C'));
setTimeout(() => order.push('B'), 0);

const p5 = Promise.reject('fail');
const p5Handled = p5.catch(() => 'caught');


function fakeFetch() {
    return Promise.resolve({ status: 200, data: "OK" });
}

async function load() {
    const response = await fakeFetch();
    return response.data;
}
const result = load();



console.log(p1);
console.log(p2Final);
console.log(p3);
console.log(order);
console.log(result);


