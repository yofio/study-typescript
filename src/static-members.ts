export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "aaa";
  static lastName: string = "qqq";

  static work() {
    return `fefereere ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
