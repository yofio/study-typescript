export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("qwqw");
console.log(myVisaCard.owner);

// myVisaCard.owner = "aass";
