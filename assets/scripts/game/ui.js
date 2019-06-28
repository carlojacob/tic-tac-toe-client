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
  $('.board').removeClass('win-highlight')
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

const markSquare = () => {
  $(store.currSquare).text(store.currentPlayerMark)
}

const displayPlayerTurn = () => {
  $('#player-turn').text(`It is ${store.currentPlayer}s turn`)
}

const invalidMove = () => {
  $('#game-message').text('That move is invalid!')
}

const displayVictory = () => {
  $('#game-status').text(`Player ${store.currentPlayerMark} has won!`)
  $('#player-turn').text('Game over!')
  $(`*[data-id="${store.winSquares[0]}"]`).addClass('win-highlight')
  $(`*[data-id="${store.winSquares[1]}"]`).addClass('win-highlight')
  $(`*[data-id="${store.winSquares[2]}"]`).addClass('win-highlight')
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
