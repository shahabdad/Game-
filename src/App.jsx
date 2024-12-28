import React, { useState } from "react";
import GameBoard from "./Component/GameBoard"; 
import Message from "./Component/Message"; 
import "./Component/App.css"; 

function App() {
  const [turn0, setTurn0] = useState(true);
  const [boxes, setBoxes] = useState(Array(9).fill("")); 
  const [winner, setWinner] = useState(null); 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const resetGame = () => {
    setBoxes(Array(9).fill("")); 
    setTurn0(true); 
    setWinner(null); 
  };
  const toggleDarkMode =()=>
{
   setIsDarkMode((prevMode)=>{
const newMode = !prevMode;
if (newMode){
  document.body.classList.add("dark-mode");
}else{
  document.body.classList.remove("dark-mode");
}
return newMode;
  });
};
  return (
    <div className="container">
      {/* Dark Mode Button */}
      {/* <button id="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button> */}
      
      {/* Header */}
      <h1>Tic-Tac-Toe</h1>
      <p>Challenge your friends in this ultimate strategy game!</p>
      
      {/* Game Board */}
      <GameBoard
        boxes={boxes}
        setBoxes={setBoxes}
        turn0={turn0}
        setTurn0={setTurn0}
        winner={winner}
        setWinner={setWinner}
      />
     
      {winner && <Message winner={winner} resetGame={resetGame} />}
      

      <button onClick={resetGame} className="control-btn">
        Reset Game
      </button>
    </div>
  );
}

export default App;
