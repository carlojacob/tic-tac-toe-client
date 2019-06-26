'use strict'

const checkSquare = square => {
  // const square = event.target
  // console.log(square, $(square).text())
  if ($(square).text() === 'X' || $(square).text() === 'O') {
    return true
  } else {
    return false
  }
}

let currentTurn = 'playerX'

const toggleTurn = () => {
  if (currentTurn === 'playerX') {
    currentTurn = 'playerO'
  } else if (currentTurn === 'playerO') {
    currentTurn = 'playerX'
  }
}

const markSquare = (square) => {
  if (currentTurn === 'playerX') {
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
