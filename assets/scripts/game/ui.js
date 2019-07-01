'use strict'

const store = require('./../store')

const newGameSuccessful = responseData => {
  store.game = responseData.game
  $('#game-info').removeClass('hidden')
  $('#auth-forms').addClass('hidden')
  $('.board').html('')
  $('#player-turn').text('Player X goes first!')
  $('#game-id').text(`Current game ID: ${store.game.id}`)
  $('#game-status').html('')
  $('#game-message').html('')
  $('#games-played').html('')
  $('.board').removeClass('o-highlight x-highlight player-x player-o')
}

const newGameFailure = () => {
  $('#game-message').text('Failed to create new game!')
  setTimeout(function () {
    $('#game-message').text('')
  }, 3000)
}

const clickBoardSuccessful = responseData => {
  $('#game-message').html('')
  $('#games-played').html('')
  store.game = responseData.game
}

const clickBoardFailure = () => {
  $('#game-message').text('Click failed, please try again.')
  setTimeout(function () {
    $('#game-message').text('')
  }, 3000)
}

const markSquare = () => {
  $('#game-message').text('')
  $(store.currSquare).addClass(`player-${store.currentPlayerMark}`)
  $(store.currSquare).text(store.currentPlayerMark)
}

const displayPlayerTurn = () => {
  $('#player-turn').text(`It is ${store.currentPlayer}s turn`)
}

const invalidMove = () => {
  $('#game-message').text('That move is invalid!')
  setTimeout(function () {
    $('#game-message').text('')
  }, 3000)
}

const displayVictory = () => {
  $('#game-status').text(`Player ${store.currentPlayerMark} has won!`)
  $('#player-turn').text('Game over!')
  $('#game-score').text(`Score: X - ${store.xScore} | O - ${store.oScore} | Draw - ${store.draw}`)
  $(`*[data-id="${store.winSquares[0]}"]`).removeClass(`player-${store.currentPlayerMark}`)
  $(`*[data-id="${store.winSquares[1]}"]`).removeClass(`player-${store.currentPlayerMark}`)
  $(`*[data-id="${store.winSquares[2]}"]`).removeClass(`player-${store.currentPlayerMark}`)
  $(`*[data-id="${store.winSquares[0]}"]`).addClass(`${store.currentPlayerMark}-highlight`)
  $(`*[data-id="${store.winSquares[1]}"]`).addClass(`${store.currentPlayerMark}-highlight`)
  $(`*[data-id="${store.winSquares[2]}"]`).addClass(`${store.currentPlayerMark}-highlight`)
}

const displayTie = () => {
  $('#game-status').text('Draw!')
  $('#player-turn').text('Game over!')
  $('#game-score').text(`Score: X - ${store.xScore} | O - ${store.oScore} | Draw - ${store.draw}`)
}

const gameOverMessage = () => {
  $('#game-message').text('The game is over! Please start a new one.')
  setTimeout(function () {
    $('#game-message').text('')
  }, 3000)
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
  $('form').trigger('reset')
  $('#show-game-message').text('Unable to find game corresponding to that ID')
  setTimeout(function () {
    $('#show-game-message').text('')
  }, 3000)
}

const clearResults = () => {
  $('#show-small-board').addClass('hidden')
  $('*[data-id="00"]').text('')
  $('*[data-id="01"]').text('')
  $('*[data-id="02"]').text('')
  $('*[data-id="03"]').text('')
  $('*[data-id="04"]').text('')
  $('*[data-id="05"]').text('')
  $('*[data-id="06"]').text('')
  $('*[data-id="07"]').text('')
  $('*[data-id="08"]').text('')
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
