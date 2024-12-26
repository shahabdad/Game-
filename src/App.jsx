import React, {useState} from "react";
//  import GameBoard from "./Component/GameBoard.jsx";
 import GameBoard from "./Component/GameBoard.jsx";
import Message from "./Component/Message.jsx";

  import "./Component/App.css";
  function App(){
    const [turn0, setTurn0] = useState (true);

    const  [boxes, setBoxes] =useState(Array(9).fill(""));
    const  [winner,setWinner] = useState(null);
    const resetGame =  ()=>{
      setBoxes(Array(9).fill(""));
      setTurn0(true);
      setWinner(null);
    };
    return (
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
        <GameBoard
        boxes={boxes}
        setBoxes= {setBoxes} 
        turn0 = {turn0}
        setTurn0 = {setBoxes}
        winner ={winner}
        setWinner={setWinner}
        />
        {winner && <Message winner ={winner } resetGame={resetGame}/>  }
        <button onClick={resetGame}  className="control-btn">
          Reset Game
        </button>
      </div>
    );
   }
   export default App;