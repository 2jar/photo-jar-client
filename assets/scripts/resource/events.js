//  onUploadFile, onCRUD & event handlers
'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onUploadFile = (event) => {
  // $('form').on('submit', (event) => {
  console.log('upload event', event)
  event.preventDefault()
  const formData = new FormData(event.target)
  api.uploadFile(formData)
    .then(ui.uploadFileSuccess)
    .then(onGetFiles)
    .catch(ui.failure)
}

const onGetFiles = (event) => {
  console.log('get files event', event)
  // event.preventDefault()
  api.getFiles()
    .then(ui.getFilesSuccess)
    .catch(ui.failure)
}

const onUpdateFile = (event) => {
  event.preventDefault()
  api.updateFile()
    .then(ui.updateFileSuccess)
    .then(onGetFiles)
    .catch(ui.failure)
}

const onDeleteFile = (event) => {
  event.preventDefault()
  api.deleteFile()
    .then(ui.deleteFileSuccess)
    .then(onGetFiles)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#upload-form').on('submit', onUploadFile)
  // $('#get-files-button').on('click', onGetFiles)
  $('#content').on('submit', '.update-image-form', onUpdateFile)
  $('#content').on('submit', '.delete-image-button', onDeleteFile)
}

module.exports = {
  addHandlers
}
