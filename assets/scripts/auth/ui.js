'use strict'
const store = require('../store.js')
const resourceUi = require('../resource/ui')
const resourceApi = require('../resource/api')

const fadeOutSignIn = function () {
  $('.sign-in-div').fadeOut(300)
}
const fadeInSignIn = function () {
  $('.sign-in-div').fadeIn(300)
}
const fadeOutAuth = function () {
  $('.initial-auth-form').fadeOut(300)
}
const fadeInAuth = function () {
  $('.initial-auth-form').fadeIn(300)
}

const signUpSuccess = () => {
  $('.register-msg').text('Successfully registered!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').text('')
  }, 2000)
  fadeInSignIn()
}

const signUpFailure = () => {
  $('.register-msg').text('Something went wrong. Try a different email.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.register-msg').text('')
  }, 2000)
}

const signInSuccess = (responseData) => {
  $('.hello').text(`Welcome, ${responseData.user.email}!`)
  $('form').trigger('reset')
  // Closes sign-in modal on successful sign in
  $('.modal-sign-in').modal('toggle')
  // This toggles the navbar closed on sign-in
  $('.navbar-collapse').collapse('hide')
  // hides signed-out view
  $('.signed-out-view').addClass('d-none')
  // this should make the sign in view display on succesful sign-in
  $('.signed-in-view').removeClass('d-none')
  fadeOutAuth()
  store.user = responseData.user
  resourceApi.getFiles()
    .then(resourceUi.getFilesSuccess)
    .catch(resourceUi.failure)
}

const signInFailure = () => {
  $('.sign-in-msg').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.sign-in-msg').text('')
  }, 2000)
}

const changePasswordSuccess = () => {
  $('.change-pw-msg').text('Successfully updated password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.change-pw-msg').text('')
  }, 2000)
}

const changePasswordFailure = () => {
  $('.change-pw-msg').text('Something went wrong, please try again!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('.change-pw-msg').text('')
  }, 2000)
}

const signOutSuccess = () => {
  $('#content').text('')
  $('.user-messages').text('Goodbye!')
  $('.navbar-collapse').collapse('hide')
  $('.signed-out-view').removeClass('d-none')
  $('.signed-in-view').addClass('d-none')

  // clear the "hello, user" message
  $('.hello').text('')
  fadeInAuth()

  store.user = null
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

const signOutFailure = () => {
  $('.user-messages').text('Something went wrong, please try again!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  fadeOutSignIn,
  fadeInSignIn
}
