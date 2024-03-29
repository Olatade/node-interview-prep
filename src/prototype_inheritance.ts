function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hi my name is ${this.name} i am ${this.age} years old`);
};

const tade = new Person("tade", 30);
const tise = new Person("tise", 21);

console.log(tade.__proto__ === tise.__proto__);
