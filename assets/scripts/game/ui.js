'use strict'

const store = require('./../store')

// const successMessage = message => {
//   $('#game-message').text(message)
//   $('#game-message').removeClass('failure')
//   $('#game-message').addClass('success')
//   $('form').trigger('reset')
// }

const failureMessage = message => {
  $('#game-message').text(message)
  $('#game-message').removeClass('success')
  $('#game-message').addClass('failure')
  $('form').trigger('reset')
}

const newGameSuccessful = responseData => {
  store.game = responseData.game
  // successMessage('Your new game has been created!')
  $('#game-board').removeClass('hidden')
  $('.board').html('')
  $('#player-turn').text('Player X goes first!')
  $('#game-id').text(`Current game ID: ${store.game.id}`)
  $('#game-status').html('')
  $('#games-played').html('')
  $('.board').removeClass('win-highlight')
}

const newGameFailure = () => {
  failureMessage('Failed to create new game!')
}

const clickBoardSuccessful = responseData => {
  $('#game-message').html('')
  $('#games-played').html('')
  store.game = responseData.game
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

const showGameSuccess = responseData => {
  $('form').trigger('reset')
  $('*[data-id="00"]').text(`${responseData.game.cells[0]}`)
  $('*[data-id="01"]').text(`${responseData.game.cells[1]}`)
  $('*[data-id="02"]').text(`${responseData.game.cells[2]}`)
  $('*[data-id="03"]').text(`${responseData.game.cells[3]}`)
  $('*[data-id="04"]').text(`${responseData.game.cells[4]}`)
  $('*[data-id="05"]').text(`${responseData.game.cells[5]}`)
  $('*[data-id="06"]').text(`${responseData.game.cells[6]}`)
  $('*[data-id="07"]').text(`${responseData.game.cells[7]}`)
  $('*[data-id="08"]').text(`${responseData.game.cells[8]}`)
  $('#show-small-board').removeClass('hidden')
}

const showGameFailure = () => {
  failureMessage('Unable to find game corresponding to that ID')
}

const clearResults = () => {
  $('#show-small-board').addClass('hidden')
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
  indexGamesFailure,
  showGameSuccess,
  showGameFailure,
  clearResults
}
