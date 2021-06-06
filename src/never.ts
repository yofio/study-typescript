export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let resurt = error("test");
  console.log({ resurt });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error("only me");
