export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("aaa", 22);
console.log(me);
