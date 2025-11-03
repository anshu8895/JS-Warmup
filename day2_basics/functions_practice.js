// BMI calculator using function
function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    return BMI.toFixed(2);
}

console.log(calculateBMI(80, 2));

// using function expression
const calculateBMIExp = function (weight, height = 1.76) {
    const BMI = weight / (height * height);
    return BMI.toFixed(2);
};

console.log(calculateBMIExp(78));


// using arrow function
const calculateBMIArrowFunc = (weight, height) => weight / (height * height).toFixed(2);

console.log(calculateBMIArrowFunc(87, 2));


// closure function
function stepCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = stepCounter();

console.log(`Total steps walked today: ${counter()}`);
console.log(`Total steps walked today: ${counter()}`);
console.log(`Total steps walked today: ${counter()}`);


