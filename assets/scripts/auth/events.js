'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onRegisterReveal = function (event) {
  event.preventDefault()
  ui.fadeOutSignIn()
}

const onSignInReveal = function (event) {
  event.preventDefault()
  ui.fadeInSignIn()
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target

  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const formReset = (event) => {
  event.preventDefault()
  $('form').trigger('reset')
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-pw-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('.clear-on-close').on('click', formReset)
  $('#register-reveal').on('click', onRegisterReveal)
  $('#sign-in-reveal').on('click', onSignInReveal)
}

module.exports = {
  addHandlers
}
