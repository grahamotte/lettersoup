import { decorate, observable } from "mobx";

import { random } from "lodash";
import { sample } from "lodash";

const randGlyph = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!".split(
    ""
  );
  return new Array(2)
    .fill(0)
    .map((a) => new Array(2).fill(0).map(() => sample(chars)));
};

class Store {
  board = [[]];

  constructor() {
    this.board = new Array(12)
      .fill(0)
      .map(() => new Array(12).fill(this.g_empty));

    this.board.forEach((r, ri) => {
      r.forEach(
        (c, ci) =>
          (this.board[ri][ci] = {
            glyph: randGlyph(),
            rotation: `rotate(${random(0, 360)}deg)`,
          })
      );
    });
  }
}

decorate(Store, {
  board: observable,
});

export default new Store();
