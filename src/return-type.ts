export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 5));

type returnTypeFromAdd = ReturnType<typeof add>;
