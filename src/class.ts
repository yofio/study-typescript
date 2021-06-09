export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  prpfile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person("taro", 30);
console.log(taro.prpfile());
// let hanako = new Person();
