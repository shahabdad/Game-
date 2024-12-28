import React from "react";
import "./GameBoard.css"; // Ensure the path is correct

function GameBoard({ boxes, setBoxes, turn0, setTurn0, winner, setWinner }) {
  const handleClick = (index) => {
    if (boxes[index] || winner) return; // Prevent clicking on a filled or disabled box

    const newBoxes = [...boxes];
    newBoxes[index] = turn0 ? "X" : "O"; // Set X or O
    setBoxes(newBoxes);
    setTurn0(!turn0); // Toggle turn
    checkWinner(newBoxes); // Check for winner
  };

  const checkWinner = (newBoxes) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoxes[a] && newBoxes[a] === newBoxes[b] && newBoxes[a] === newBoxes[c]) {
        setWinner(newBoxes[a]); // Declare winner
        return;
      }
    }
  };

  return (
    <div className="game-board">
      {Array(3).fill(0).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array(3).fill(0).map((_, colIndex) => {
            const index = rowIndex * 3 + colIndex; // Calculate box index
            return (
              <div
                key={colIndex}
                className={`box ${boxes[index] ? "disabled" : ""}`}
                onClick={() => handleClick(index)}
              >
                {boxes[index]}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
