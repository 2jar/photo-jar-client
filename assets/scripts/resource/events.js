//  onUploadFile, onCRUD & event handlers
'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')

const onUploadFile = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  api.uploadFile(formData)
    .then(ui.uploadFileSuccess)
    .catch(ui.failure)
}

const onUpdateFile = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateFile(formData)
    .then(ui.updateFileSuccess)
    .catch(ui.failure)
}

const onDeleteFile = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  store.imageId = formData.image.id
  api.deleteFile(formData)
    .then(ui.deleteFileSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#upload-form').on('submit', onUploadFile)
  $('#content').on('submit', '.update-image-form', onUpdateFile)
  $('body').on('submit', '.delete-image-form', onDeleteFile)
}

module.exports = {
  addHandlers
}
