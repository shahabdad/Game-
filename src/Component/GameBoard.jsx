import React from 'react'
import Box from "./Box"

const winPatters =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const GameBoard = ({boxes,setBoxes,turn0,setTurn0,winner,setWinner}) => {
    const checkWinner=(newBoxes)=>{
        for (let pattern of winPatters){
            const[a,b,c] =  pattern;
            if(
                newBoxes[a] &&
                newBoxes[a] === newBoxes[b] &&
                newBoxes[a] === newBoxes[c]
            ){
                setWinner(newBoxes[a]);
                return;
            }
        }
    };
    const handleClick = (index) =>{
            if (!boxes[index] && !winner){
                const newBoxes = [...boxes];
                newBoxes[index] = turn0 ? "0" :"x";
                setBoxes(newBoxes);
                setTurn0(!turn0);
                checkWinner(newBoxes);
            }
    };
  return(
    <div className='game'>
        {boxes.map((value,index)=>(
                <Box
                key = {index}
                value={value}
                onClick ={() => handleClick(index)}
                winner  ={winner}
                />
            ))}
    </div>
  )
}
export default GameBoard