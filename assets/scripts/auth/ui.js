'use strict'

const store = require('./../store')

const successMessage = message => {
  $('#auth-message').text(message)
  $('#auth-message').removeClass('failure')
  $('#auth-message').addClass('success')
  $('form').trigger('reset') // clears out form fields
}

const failureMessage = message => {
  $('#auth-message').text(message)
  $('#auth-message').removeClass('success')
  $('#auth-message').addClass('failure')
  $('form').trigger('reset') // clears out form fields
}

const hideSignIn = () => {
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
}

const hideSignOut = () => {
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('Your sign up failed!')
}

const signInSuccessful = responseData => {
  successMessage('You signed in successfully!')
  hideSignIn()
  // keeping track of the user so we can have the token for the API
  // we use `store` so we can access the token in any file
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Your sign in failed!')
}

const changePasswordSuccessful = () => {
  successMessage('You changed your password successfully!')
}

const changePasswordFailure = () => {
  failureMessage('Failed to change password!')
}

const signOutSuccessful = () => {
  successMessage('You signed out successfully!')
  hideSignOut()
}

const signOutFailure = () => {
  failureMessage('Failed to sign out!')
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
