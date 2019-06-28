'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#new-game').on('click', gameEvents.onNewGame)

  $('.board').on('click', gameEvents.onClickBoard)

  $('#index-games').on('click', gameEvents.onIndexGames)

  $('#show-game').on('submit', gameEvents.onShowGame)

  $('#clear-show-game').on('click', gameEvents.onClearResults)
})
