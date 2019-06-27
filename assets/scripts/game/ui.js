'use strict'

const store = require('./../store')

const successMessage = message => {
  $('#game-message').text(message)
  $('#game-message').removeClass('failure')
  $('#game-message').addClass('success')
}

const failureMessage = message => {
  $('#game-message').text(message)
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
}

const newGameSuccessful = responseData => {
  successMessage('Your new game has been created!')
  $('.board').html('')
  $('#player-turn').text('Player X goes first!')
  $('#game-status').html('')
  $('#games-played').html('')
  store.game = responseData.game
}

const newGameFailure = () => {
  failureMessage('Failed to create new game!')
}

const clickBoardSuccessful = responseData => {
  $('#game-message').html('')
  $('#games-played').html('')
  store.game = responseData.game
  console.log(store.game)
}

const clickBoardFailure = () => {
  failureMessage('Click failed, please try again.')
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
  failureMessage('The game is over! Please start a new one.')
}

const indexGamesSuccess = responseData => {
  $('#games-played').text(`You've played ${responseData.games.length} games!`)
}

const indexGamesFailure = () => {
  $('#games-played').text('Failed to retrieve game data')
}

module.exports = {
  newGameSuccessful,
  newGameFailure,
  clickBoardSuccessful,
  clickBoardFailure,
  markSquare,
  displayPlayerTurn,
  invalidMove,
  displayVictory,
  displayTie,
  gameOverMessage,
  indexGamesSuccess,
  indexGamesFailure
}
