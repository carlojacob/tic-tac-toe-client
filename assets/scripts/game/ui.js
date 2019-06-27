'use strict'

const store = require('./../store')

const successMessage = message => {
  $('#game-message').text(message)
  $('#game-message').removeClass('failure')
  $('#game-message').addClass('success')
  $('form').trigger('reset') // clears out form fields
}

const failureMessage = message => {
  $('#game-message').text(message)
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
  $('form').trigger('reset') // clears out form fields
}

const newGameSuccessful = responseData => {
  successMessage('Your new game has been created!')
  $('.board').html('')
  $('#player-turn').text('Player X goes first!')
  $('#game-status').html('')
  store.game = responseData.game
}

const newGameFailure = () => {
  failureMessage('Failed to create new game!')
}

const markSquare = (square, currentPlayerMark) => {
  $(square).text(currentPlayerMark)
}

const displayPlayerTurn = currPlayer => {
  $('#player-turn').text(`It is ${currPlayer}s turn`)
}

const invalidMove = () => {
  $('#game-message').text('That move is invalid!')
}

const displayVictory = victor => {
  $('#game-status').text(`Player ${victor} has won!`)
  $('#player-turn').text('Game over!')
}

const displayTie = () => {
  $('#game-status').text('Players X and O have tied!')
  $('#player-turn').text('Game over!')
}

const gameOverMessage = () => {
  $('#game-message').text('The game is over! Please start a new one.')
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  markSquare,
  displayPlayerTurn,
  invalidMove,
  displayVictory,
  displayTie,
  gameOverMessage
}
