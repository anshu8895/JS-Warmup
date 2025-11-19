// warmup set A
const numbers = [2, 4, 6, 8, 10];

console.log(numbers.map(num => num * 2));
console.log(numbers.filter(num => num > 5));
console.log(numbers.map(n => String(n)));
console.log(numbers.reduce((acc, num) => acc + num, 0));
console.log(numbers.reduce((acc, i) => {
    acc[i] = true;
    return acc;
}, {}));

// warmup set B
const users = [
    { id: 1, name: "A", active: true },
    { id: 2, name: "B", active: false },
    { id: 3, name: "C", active: true }
];

console.log(users.map(user => user.name));
console.log(users.filter(user => user.active));
console.log(users.map(user =>
    user.id === 2 ? { ...user, active: true } : user
));

// warmup set C
const items = ["a", "b", "c"];

console.log([...items, "d"]);
console.log(items.filter(item => item !== 'b'));


// task set 2
const orders = [
    { id: 1, item: "Apple", quantity: 2, price: 30 },
    { id: 2, item: "Banana", quantity: 5, price: 10 },
    { id: 3, item: "Milk", quantity: 1, price: 50 },
    { id: 4, item: "Bread", quantity: 3, price: 25 }
];


const ordersWithTotal = orders.map(i => {
    const total = i.quantity * i.price;
    return { ...i, total };
});

const orderGreaterThan60 = ordersWithTotal.filter(i => i.total > 60);
const orderNameUppercase = ordersWithTotal.map(i => i.item.toUpperCase());
const grandTotalCost = ordersWithTotal.reduce((acc, i) => acc + i.total, 0);
const arrayIntoObjWithID = ordersWithTotal.reduce((acc, i) => {
    const { id, ...itemWithoutId } = i;
    return { ...acc, [id]: itemWithoutId };
}, {});


console.log(ordersWithTotal);
console.log(orderGreaterThan60);
console.log(orderNameUppercase);
console.log(grandTotalCost);
console.log(arrayIntoObjWithID);

// task set 3
const rawOrders = [
    { id: 1, item: "apple", qty: 2, price: 30 },
    { id: 2, item: "banana", qty: 0, price: 10 },        // zero quantity
    { id: null, item: "milk", qty: 1, price: 50 },       // missing id
    { id: 4, item: "bread", qty: 3, price: 25 },
    { id: 5, item: "", qty: 2, price: null },            // missing item, invalid price
    { item: "chips", qty: 4, price: 15 },                // missing id
    null,                                                // corrupt entry
    { id: 8, item: "juice", qty: 1, price: 40 }
];


const validOrders = rawOrders.filter(i =>
    i &&
    typeof (i.id) === 'number' &&
    typeof (i.item) === 'string' && i.item.trim() !== "" &&
    typeof (i.price) === 'number' && i.price > 0 &&
    typeof (i.qty) === 'number' && i.qty > 0);

const normalizedOrders = validOrders.map(i => {
    const uppercaseItem = i.item.toUpperCase().trim();
    return { ...i, item: uppercaseItem };
});

const orderWithTotal = normalizedOrders.map(i => ({ ...i, total: i.qty * i.price }));

const orderByFirstLetter = normalizedOrders.reduce((acc, i) => {
    const firstLetter = i.item.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
        acc[firstLetter] = [];
    }
    acc[firstLetter].push(i);
    return acc;
}, {});
const costliestOrder = orderWithTotal.reduce((maxOrder, currOrder) => {
    return (maxOrder.total > currOrder.total ? maxOrder : currOrder);
}, orderWithTotal[0]);

console.log("validOrders", validOrders);
console.log("normalizedOrders", normalizedOrders);
console.log("orderWithTotal", orderWithTotal);
console.log("orderByFirstLetter", orderByFirstLetter);
console.log("costliestOrder", costliestOrder);

