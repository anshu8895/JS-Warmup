class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

const a = new Animal('Leo');

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.play = () => `${this.name} is playing`;
        // When a method defined using an arrow function inside the constructor, it creates a new function for each instance because it's assigned as a property directly to each object.
    }

    bark() {
        return `${this.name} barks`;
    }
}

const d = new Dog("Rocky", "Labrador");

Animal.prototype.sleep = function () {
    return `${this.name} is sleeping`;
};

const allAnimals = [
    new Dog("Rex", "German Shepherd"),
    new Animal("Milo"),
    new Dog("Buddy", "Beagle")
];

const arrayNames = allAnimals.map(i => i.name);
const filterDogs = allAnimals.filter(i => i instanceof Dog);
const callSpeakFn = allAnimals.map(i => i.speak());
const countDogs = allAnimals.reduce((acc, i) => {
    if (i instanceof Dog) {
        return acc + 1;
    }
    return acc;
}, 0);



console.log(arrayNames);
console.log(filterDogs);
console.log(callSpeakFn);
console.log(countDogs);

console.log(a);
console.log(a.speak());
console.log(d);
console.log(d.bark());
console.log(a.sleep());
console.log(d.sleep());

