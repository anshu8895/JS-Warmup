const num = [1, 2, 3, 4, 5];
num.push(4);
num.pop();
num.unshift(9);
num.shift();

console.log(num);

const square = num.forEach(n => n * n);
console.log(square);

const double = num.map(n => n * 2);
console.log(double);
