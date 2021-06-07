export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let someAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let someUnknown = numberUnknown + 10;
}
