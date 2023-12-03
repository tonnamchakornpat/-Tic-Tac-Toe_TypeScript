'use client'
import Box from './Box'
import { useState } from 'react'

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)

  const handleClick = (i: number) => {
    if (winner === null) {
      const updateBoard = board.map((value, idx: number) => {
        if (idx === i) return player ? 'X' : 'O'
        else return value
      })
      checkWinner(updateBoard)
      setPlayer(!player)
      setBoard(updateBoard)
    }
  }

  const checkWinner = (board: Array<string | null>): string | null => {
    for (let i = 0; i < winCondition.length; i++) {
      const [x, y, z] = winCondition[i]

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x])
        setWinner(board[x])
        return board[x]
      }
    }
    return null
  }

  const reset = () => {
    setBoard(board.fill(null))
    setWinner(null)
    setPlayer(true)
  }

  return (
    <>
      <h1 className="font-bold text-6xl">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-1 place-items-center my-7">
        {board.map((value, idx) => (
          <Box
            key={idx}
            value={value}
            onClick={() => value == null && handleClick(idx)}
          />
        ))}
      </div>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-10"
      >
        Reset
      </button>
      {winner != null && (
        <h2 className="font-bold text-4xl">player {winner} win.</h2>
      )}
    </>
  )
}

export default Board
