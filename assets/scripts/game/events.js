'use strict'

const checkSquare = event => {
  const square = event.target
  console.log(square, $(square).text())
  if ($(square).text() === 'X' || $(square).text() === 'O') {
    console.log('That move is invalid!')
  }
}

const onClickBoard = event => {
  event.preventDefault()
  checkSquare(event)
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
