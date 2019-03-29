//  onUploadFile, onCRUD & event handlers
'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onUploadFile = (event) => {
  // $('form').on('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  api.uploadFile(formData)
    .then(ui.uploadFileSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#upload-form').on('submit', onUploadFile)
}

module.exports = {
  addHandlers
}
