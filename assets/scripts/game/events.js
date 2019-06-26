'use strict'

const ui = require('./ui')

const checkSquare = square => {
  // const square = event.target
  // console.log(square, $(square).text())
  if ($(square).text() === 'X' || $(square).text() === 'O') {
    return true
  } else {
    return false
  }
}

let currentTurn = 'Player X'

const toggleTurn = () => {
  if (currentTurn === 'Player X') {
    currentTurn = 'Player O'
    ui.displayPlayerTurn(currentTurn)
  } else if (currentTurn === 'Player O') {
    currentTurn = 'Player X'
    ui.displayPlayerTurn(currentTurn)
  }
}

const markSquare = (square) => {
  if (currentTurn === 'Player X') {
    $(square).text('X')
  } else {
    $(square).text('O')
  }
}

const onClickBoard = event => {
  event.preventDefault()
  const square = event.target
  const isItMarked = checkSquare(square)
  if (isItMarked) {
    console.log('That move is invalid!')
  } else {
    markSquare(square)
    toggleTurn()
  }
  // const square = event.target
  // console.log(square, $(square).text())
  // if ($(square).text() === 'X' || $(square).text() === 'O') {
  //   console.log('That move is invalid!')
  // }
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
