const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  this.beans = beans;
}

CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making!!");
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(10);

console.log(machine1);
console.log(machine2.makeCoffee(2));