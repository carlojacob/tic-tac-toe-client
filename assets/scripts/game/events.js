'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

store.winIds = [
  [0, 1, 2], // 0, data-ids 0, 1, and 2
  [3, 4, 5], // 1, data-ids 3, 4, and 5
  [6, 7, 8], // 2, data-ids 6, 7, and 8
  [0, 3, 6], // 3, data-ids 0, 3, and 6
  [1, 4, 7], // 4, data-ids 1, 4, and 7
  [2, 5, 8], // 5, data-ids 2, 5, and 8
  [0, 4, 8], // 6, data-ids 0, 4, and 8
  [2, 4, 6] // 7, data-ids 2, 4, and 6
]

// function that resets the game logic
const resetGame = () => {
  store.currentPlayer = 'Player X'
  store.currentPlayerMark = 'x'
  store.winConditions = [[], [], [], [], [], [], [], []]
  store.board = ['', '', '', '', '', '', '', '', '']
  store.didXWin = false
  store.didOWin = false
  store.didTheyTie = false
  store.isItOver = false
}

const onNewGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccessful)
    .catch(ui.newGameFailure)
  resetGame()
}

// function that checks if a square has already been marked
const checkSquare = square => {
  if ($(square).text() === 'x' || $(square).text() === 'o') {
    return true
  } else {
    return false
  }
}

// function that changes the current player
const toggleTurn = () => {
  if (store.currentPlayer === 'Player X') {
    store.currentPlayer = 'Player O'
    store.currentPlayerMark = 'o'
    ui.displayPlayerTurn()
  } else if (store.currentPlayer === 'Player O') {
    store.currentPlayer = 'Player X'
    store.currentPlayerMark = 'x'
    ui.displayPlayerTurn()
  }
}

// function that puts the current player mark in the appropriate win condition array
const pushPlayerMark = id => {
  store.board[id] = store.currentPlayerMark
  for (let i = 0; i < store.winIds.length; i++) {
    const shouldItPush = store.winIds[i].some(function (currNum) {
      return store.currId === currNum
    })
    if (shouldItPush) {
      store.winConditions[i].push(store.currentPlayerMark)
    }
  }
}

// cheacks if any of the win condition arrays contain all Xs
const checkX = currString => currString === 'x'

// cheacks if any of the win condition arrays contain all Os
const checkO = currString => currString === 'o'

// checks if every element of the board array is full with player marks
const checkTie = currString => currString === 'x' || currString === 'o'

// checks if someone has one or tied
const isTheGameOver = () => {
  for (let i = 0; i < store.winConditions.length; i++) {
    store.didXWin = store.winConditions[i].every(checkX) && store.winConditions[i].length === 3
    store.didOWin = store.winConditions[i].every(checkO) && store.winConditions[i].length === 3
    if (store.didXWin) {
      store.winSquares = store.winIds[i]
      ui.displayVictory()
      return true
    } else if (store.didOWin) {
      store.winSquares = store.winIds[i]
      ui.displayVictory()
      return true
    }
  }
  store.didTheyTie = store.board.every(checkTie)
  if (store.didTheyTie) {
    ui.displayTie()
    return true
  }
  return false
}

// function that executes when someone clicks on a space in the board
const onClickBoard = event => {
  event.preventDefault()
  store.currSquare = event.target
  store.currId = $(store.currSquare).data('id') // retrieves data-id value of square that was clicked
  const isItMarked = checkSquare(store.currSquare)
  if (store.isItOver) {
    ui.gameOverMessage()
  } else if (isItMarked) {
    ui.invalidMove()
  } else {
    ui.markSquare() // marks square with current player mark
    pushPlayerMark(store.currId) // pushes current player mark to appropriate win condition arrays
    store.isItOver = isTheGameOver() // checks if someone/who has won
    api.clickBoard()
      .then(ui.clickBoardSuccessful)
      .catch(ui.clickBoardFailure)
    if (!store.isItOver) {
      toggleTurn() // switches the current player if the game is not over
    }
  }
}

const onIndexGames = event => {
  event.preventDefault()
  api.indexGames()
    .then(ui.indexGamesSuccess)
    .catch(ui.indexGamesFailure)
}

const onShowGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showGame(formData)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const onClearResults = event => {
  event.preventDefault()
  ui.clearResults()
}

module.exports = {
  onClickBoard,
  onNewGame,
  onIndexGames,
  onShowGame,
  onClearResults
}
