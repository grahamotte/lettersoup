import React from "react";
import { random } from "lodash";
import store from "./store";
import { transpose } from "lodash-transpose";

const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomRotation = () => {
  return `rotate(${random(0, 360)}deg)`;
};

function TwoDTxt(props) {
  return (
    <div className="container" style={{ transform: randomRotation() }}>
      {transpose(props.glyph).map((r, ri) => {
        return (
          <div className="row" key={ri}>
            {r.map((c, ci) => {
              return (
                <div className="cell" key={ci} style={{ color: randomColor() }}>
                  {c}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Board(props) {
  return (
    <div className="container">
      {transpose(props.arr).map((r, ri) => {
        return (
          <div className="row" key={ri}>
            {r.map((c, ci) => {
              return (
                <div className="board-cell" key={ci}>
                  <TwoDTxt {...c} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Board arr={store.board} />
    </div>
  );
}

export default App;
