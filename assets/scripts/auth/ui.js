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
  $('#game-stats').removeClass('hidden')
  $('#landing-page2').addClass('hidden')
}

const hideSignOut = () => {
  $('#auth-nav').addClass('hidden')
  $('#auth-forms').addClass('hidden')
  $('#game-info').addClass('hidden')
  $('#game-stats').addClass('hidden')
  $('#landing-page2').removeClass('hidden')
}

const signUpSuccessful = responseData => {
  $('#auth-message').text('You signed up successfully! Please sign in below.')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
  $('form').trigger('reset')
  $('#landing-page1').addClass('hidden')
  $('#landing-page2').removeClass('hidden')
}

const signUpFailure = () => {
  $('#auth-message').text('Sign up failed, please try again')
  setTimeout(function () {
    $('#auth-message').text('')
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
  $('#auth-message').text('Incorrect email or password')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
  $('form').trigger('reset')
}

const switchSignIn = () => {
  $('#landing-page1').addClass('hidden')
  $('#landing-page2').removeClass('hidden')
}

const switchSignUp = () => {
  $('#landing-page2').addClass('hidden')
  $('#landing-page1').removeClass('hidden')
}

const pwBtn = () => {
  $('.game-board').addClass('hidden')
  $('#game-info').addClass('hidden')
  $('#game-stats').addClass('hidden')
  $('#auth-forms').removeClass('hidden')
}

const changePasswordSuccessful = () => {
  $('#auth-message').text('You changed your password successfully')
  setTimeout(function () {
    $('#auth-message').text('')
  }, 3000)
  $('form').trigger('reset')
  $('#auth-forms').addClass('hidden')
  $('#game-stats').removeClass('hidden')
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
  $('#game-info').addClass('hidden')
  $('#game-message').html('')
  $('#game-status').html('')
  $('#player-turn').html('')
  $('#game-id').html('')
  $('#game-score').text('Score: X - 0 | O - 0 | Draw - 0')
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
  switchSignIn,
  switchSignUp,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure,
  pwBtn
}
