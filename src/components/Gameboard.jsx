import { useState } from "react"

// const initalGameboard = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ]

export default function Gameboard({onSelectSquare, board}){

    // let gameBoard = initalGameboard;

    // for(const turn of turns){
    //     const {square, player} = turn;
    //     const {row, col} = square;

    //     gameBoard[row][col] = player;
    // }

    // const[gameBoard, setGameBoard] = useState(initalGameboard);

    // function handleSelectedSquare(colIndex, rowIndex){
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; //Best Practice of updating object state Immutably ref: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39659798#questions
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //     return updatedGameBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
       <ol id='game-board'>
        {
            board.map((row, rowIndex) => ( 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
                    </li>
                    ))}
                </ol>
            </li>
            ))}
       </ol>
    )
}
