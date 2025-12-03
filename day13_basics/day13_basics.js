// exercise 1
const animal = {
    eats: true
};

const dog = Object.create(animal);
dog.barks = true;

const lab = Object.create(dog);
lab.color = 'yellow';

console.log(lab.eats);
console.log(lab.barks);
console.log(lab.color);

// exercise 2
function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function () { };
const p = new Person("John");
Person.prototype.walk = function () { };


// exercise 3
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const value = callback(this[i], i, this);
        result.push(value);
    }
    return result;
};

// exercise 4
Function.prototype.myBind = function(context) {
    const fn = this;
    return function (...args) {
       return fn.apply(context, args);  
    }
}

// exercise 5
const Machine = { on: false }
const Fan = Object.create(Machine)
Fan.toggle = function() {
    this.on = !this.on;
}
const ceilingFan = Object.create(Fan);
