export {};

// * ownew
//   * 所有者
//   * 初期化時に設定できない。
//   * 参照できる
// *secretNUmber
//   * 個人番号
//   * 初期化時に設定できる
//   * 途中で設定できる
//   * 参照できない

class MynumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MynumberCard("aa", 11111111);
console.log(card.debugPrint());
card.secretNumber = 1122111;
console.log(card.debugPrint());
// card.owner = "www";
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;

console.log(card.secretNumber);
