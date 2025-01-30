import React from "react";
import { useTicTacToe } from "../hooks/useTicTacToe";
import "./index.css";

const TicTacToe = () => {
  const { boards, handerClick, getMessageStatus, resetGame } = useTicTacToe();
  return (
    <div className="game">
      <div className="status">
        {getMessageStatus()}
        <button onClick={resetGame}>Reset</button>
      </div>

      <div className="board">
        {boards.map((value, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handerClick(index)}
            disabled={value !== null}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
