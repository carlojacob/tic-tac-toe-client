'use strict'

const ui = require('./ui')

const board = ['', '', '', '', '', '', '', '', '']

// function that checks if a square has already been marked
const checkSquare = square => {
  if ($(square).text() === 'X' || $(square).text() === 'O') {
    return true
  } else {
    return false
  }
}

let currentPlayer = 'Player X'
let currentPlayerMark = 'X'

// function that changes the current player
const toggleTurn = () => {
  if (currentPlayer === 'Player X') {
    currentPlayer = 'Player O'
    currentPlayerMark = 'O'
    ui.displayPlayerTurn(currentPlayer)
  } else if (currentPlayer === 'Player O') {
    currentPlayer = 'Player X'
    currentPlayerMark = 'X'
    ui.displayPlayerTurn(currentPlayer)
  }
}

// function that marks a square based on whose turn it is
const markSquare = (square) => {
  $(square).text(currentPlayerMark)
}

const winConditions = [
  [], // 0, data-ids 0, 1, and 2
  [], // 1, data-ids 3, 4, and 5
  [], // 2, data-ids 6, 7, and 8
  [], // 3, data-ids 0, 3, and 6
  [], // 4, data-ids 1, 4, and 7
  [], // 5, data-ids 2, 5, and 8
  [], // 6, data-ids 0, 4, and 8
  [] // 7, data-ids 2, 4, and 6
]

const pushPlayerMark = id => {
  board[id] = currentPlayerMark
  switch (id) {
    case 0:
      winConditions[0].push(currentPlayerMark)
      winConditions[3].push(currentPlayerMark)
      winConditions[6].push(currentPlayerMark)
      break
    case 1:
      winConditions[0].push(currentPlayerMark)
      winConditions[4].push(currentPlayerMark)
      break
    case 2:
      winConditions[0].push(currentPlayerMark)
      winConditions[5].push(currentPlayerMark)
      winConditions[7].push(currentPlayerMark)
      break
    case 3:
      winConditions[1].push(currentPlayerMark)
      winConditions[3].push(currentPlayerMark)
      break
    case 4:
      winConditions[1].push(currentPlayerMark)
      winConditions[4].push(currentPlayerMark)
      winConditions[6].push(currentPlayerMark)
      winConditions[7].push(currentPlayerMark)
      break
    case 5:
      winConditions[1].push(currentPlayerMark)
      winConditions[5].push(currentPlayerMark)
      break
    case 6:
      winConditions[2].push(currentPlayerMark)
      winConditions[3].push(currentPlayerMark)
      winConditions[7].push(currentPlayerMark)
      break
    case 7:
      winConditions[2].push(currentPlayerMark)
      winConditions[4].push(currentPlayerMark)
      break
    case 8:
      winConditions[2].push(currentPlayerMark)
      winConditions[5].push(currentPlayerMark)
      winConditions[6].push(currentPlayerMark)
      break
  }
}

let didXWin = false
let didOWin = false
let didTheyTie = false
let isItOver

const checkX = currString => currString === 'X'

const checkO = currString => currString === 'O'

const checkTie = currString => currString === 'X' || currString === 'O'

const isTheGameOver = () => {
  for (let i = 0; i < winConditions.length; i++) {
    didXWin = winConditions[i].every(checkX) && winConditions[i].length === 3
    didOWin = winConditions[i].every(checkO) && winConditions[i].length === 3
    if (didXWin) {
      ui.displayVictory(currentPlayerMark)
      return true
    } else if (didOWin) {
      ui.displayVictory(currentPlayerMark)
      return true
    }
  }
  didTheyTie = board.every(checkTie)
  if (didTheyTie) {
    ui.displayTie()
    return true
  }
  return false
}

// function that executes when someone clicks on a space in the board
const onClickBoard = event => {
  event.preventDefault()
  const square = event.target
  const id = $(square).data('id') // retrieves data-id value of square that was clicked
  console.log(id)
  const isItMarked = checkSquare(square)
  if (isItMarked) {
    ui.invalidMove()
  } else if (isItOver) {
    ui.gameOverMessage()
  } else {
    markSquare(square) // marks square with current player mark
    pushPlayerMark(id) // pushes current player mark to appropriate win condition arrays
    isItOver = isTheGameOver() // checks if someone/who has won
    console.log(board)
    console.log(isTheGameOver(), isItOver)
    toggleTurn()
  }
  // check if someone is in square
  // add current player marker
  // check if someone has won
  // toggle player turn

  // update api
  // update ui
}

module.exports = {
  onClickBoard
}
