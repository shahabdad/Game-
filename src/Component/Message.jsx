import React  from "react";

function Message ({winner, resetGame }){
    return(
        <div className="msg-container">
            <p id="msg">🎉 Congratulations! Winner is {winner} </p>
            <button   onClick={resetGame}  id ="new-btn">
                New Game 
            </button>
        </div>
    );
}
export default Message;