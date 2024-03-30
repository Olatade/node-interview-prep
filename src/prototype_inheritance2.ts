const util = require("util");

function Person() {
  this.firstName = "tade";
  this.lastName = "abiona";
}

function AnotherPerson() {
  this.someone = "tise";
  this.lastName = "andela";
}

Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.someone} ${this.lastName}`);
};

function Policeman() {
  AnotherPerson.call(this);
  Person.call(this);
  this.badgenumber = "123";
}

util.inherits(Policeman, Person);

const officer = new Policeman();

officer.greet();

console.log(officer);
