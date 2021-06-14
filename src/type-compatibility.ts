export {};

let fooCompatible: any;
let barCompatible: string = "TypeSscript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStrigLiteral: "fooStrigLiteral" = "fooStrigLiteral";
fooString = fooStrigLiteral;

let fooNUmber: number;
let fooNumberLiteral: 1111 = 1111;
fooNUmber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(22, "あっささ");
