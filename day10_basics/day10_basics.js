// this
const car = {
  brand: "Tesla",
  info() {
    return `${this.brand} car`;
  }
};
const carInfo = car.info;
const result1 = carInfo();  // undefined because this = undefined

const result2 = car.info.call({ brand: "BMW" });

const boundInfo = car.info.bind({ brand: "Audi" });
const result3 = boundInfo();

const box = {
  id: 10,
  getId: function () {
    const inner = () => this.id;
    return inner();
  }
};
const result4 = box.getId();

const failObj = {
  id: 50,
  getId: () => this.id
};
const result5 = failObj.getId();



console.log(car.info());
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

