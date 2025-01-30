import { useState } from "react";

const initial = Array(9).fill(null);

export const useTicTacToe = () => {
  const [boards, setBoards] = useState(initial);
  const [isXNext, setIsXNext] = useState(true);

  const WINNIG_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handerClick = (index) => {
    const winner = calculateWinner(boards);
    if (winner || boards[index]) return;

    const newBoard = [...boards];
    newBoard[index] = isXNext ? "X" : "O";
    setBoards(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNIG_PATTERN.length; i++) {
      const [a, b, c] = WINNIG_PATTERN[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getMessageStatus = () => {
    const winner = calculateWinner(boards);
    if (winner) return ` '${winner}' wins`;
    if (!boards.includes(null)) return `It's draw`;
    return `Player ${isXNext ? "X" : "O"} turn `;
  };

  const resetGame = () => {
    setBoards(initial);
  };

  return { boards, calculateWinner, handerClick, getMessageStatus, resetGame };
};
