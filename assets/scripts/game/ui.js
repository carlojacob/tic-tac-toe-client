'use strict'

const displayPlayerTurn = currPlayer => {
  $('#player-turn').text(`It is ${currPlayer}s turn`)
}

const invalidMove = () => {
  $('#message').text('That move is invalid!')
}

const displayVictory = victor => {
  $('#game-status').text(`Player ${victor} has won!`)
}

const displayTie = () => {
  $('#game-status').text('Players X and O have tied!')
}

const gameOverMessage = () => {
  $('#message').text('The game is over! Please start a new one.')
}

module.exports = {
  displayPlayerTurn,
  invalidMove,
  displayVictory,
  displayTie,
  gameOverMessage
}
