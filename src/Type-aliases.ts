export {};

type Moziretu = string;

const fooString: string = "hello";
const fooMoziretu: Moziretu = "hello";

type Profile = { name: string; age: number };

const example1 = { name: "aa", age: 22 };

const example2: Profile = { name: "aa", age: 22 };

type Profile2 = typeof example1;
