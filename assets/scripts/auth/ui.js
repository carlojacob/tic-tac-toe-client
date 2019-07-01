'use strict'

const store = require('./../store')

// const successMessage = message => {
//   $('#auth-message').text(message)
//   $('#auth-message').removeClass('failure')
//   $('#auth-message').addClass('success')
//   $('form').trigger('reset') // clears out form fields
// }
//
// const failureMessage = message => {
//   $('#auth-message').text(message)
//   $('#auth-message').removeClass('success')
//   $('#auth-message').addClass('failure')
//   $('form').trigger('reset') // clears out form fields
// }

const hideSignIn = () => {
  $('#auth-nav').removeClass('hidden')
  $('#game-info').removeClass('hidden')
  $('#landing-page').addClass('hidden')
}

const hideSignOut = () => {
  $('#auth-nav').addClass('hidden')
  $('#auth-forms').addClass('hidden')
  $('#game-info').addClass('hidden')
  $('#landing-page').removeClass('hidden')
}

const signUpSuccessful = responseData => {
  $('#sign-up-message').text('You signed up successfully! Please sign in below.')
  setTimeout(function () {
    $('#sign-up-message').text('')
  }, 3000)
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#sign-up-message').text('Sign up failed.')
  setTimeout(function () {
    $('#sign-up-message').text('')
  }, 3000)
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  hideSignIn()
  $('form').trigger('reset')
  // keeping track of the user so we can have the token for the API
  // we use `store` so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  $('#sign-in-message').text('Incorrect email or password')
  setTimeout(function () {
    $('#sign-in-message').text('')
  }, 3000)
  $('form').trigger('reset')
}

const pwBtn = () => {
  $('#game-board').addClass('hidden')
  $('#game-info').addClass('hidden')
  $('#auth-forms').removeClass('hidden')
}

const changePasswordSuccessful = () => {
  $('#auth-message').text('You changed your password successfully')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
  $('form').trigger('reset')
  $('#auth-forms').addClass('hidden')
}

const changePasswordFailure = () => {
  $('#change-pw-message').text('Failed to change password')
  setTimeout(function () {
    $('#change-pw-message').text('')
  }, 3000)
  $('form').trigger('reset')
}

const signOutSuccessful = () => {
  $('#auth-message').text('You signed out successfully')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
  hideSignOut()
  $('#game-board').addClass('hidden')
}

const signOutFailure = () => {
  $('#auth-message').text('Failed to sign out')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  pwBtn
}
