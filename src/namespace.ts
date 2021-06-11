export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("qqq");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("osaka");
console.log(meOsaka.name);

const mj = new English.Person("michael", "joseph", "jackson");
console.log(mj);
