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
  $('#auth-forms').removeClass('hidden')
  $('nav').removeClass('hidden')
  $('#landing-page').addClass('hidden')
}

const hideSignOut = () => {
  $('#auth-forms').addClass('hidden')
  $('nav').addClass('hidden')
  $('#landing-page').removeClass('hidden')
}

const signUpSuccessful = responseData => {
  $('#sign-up-message').text('You signed up successfully! Please sign in below.')
  $('#sign-in-message').text('')
  $('#auth-message').text('')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('#sign-up-message').text('That email is taken, plaese try a different one.')
  $('#sign-in-message').text('')
  $('#auth-message').text('')
  $('form').trigger('reset')
  // failureMessage('Your sign up failed!')
}

const signInSuccessful = responseData => {
  // successMessage('You signed in successfully!')
  hideSignIn()
  $('#sign-up-message').text('')
  $('#sign-in-message').text('')
  $('#auth-message').text('')
  // keeping track of the user so we can have the token for the API
  // we use `store` so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  $('#sign-in-message').text('Incorrect email or password')
  $('#sign-up-message').text('')
  $('#auth-message').text('')
  $('form').trigger('reset')
  // failureMessage('Your sign in failed!')
}

const changePasswordSuccessful = () => {
  $('#change-pw-message').text('You changed your password successfully')
  $('#sign-out-message').text('')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('#change-pw-message').text('Failed to change password')
  $('#sign-out-message').text('')
  $('form').trigger('reset')
}

const signOutSuccessful = () => {
  $('#auth-message').text('You signed out successfully')
  $('#change-pw-message').text('')
  $('#sign-out-message').text('')
  hideSignOut()
  $('#game-board').addClass('hidden')
}

const signOutFailure = () => {
  $('#sign-out-message').text('Failed to sign out')
  $('#change-pw-message').text('')
}

module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
