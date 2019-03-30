// AJAX here

const config = require('../config.js')
const store = require('../store.js')

const uploadFile = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/images',
    method: 'POST',
    contentType: false,
    processData: false,
    enctype: 'multipart/form-data',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const getFiles = () => {
  return $.ajax({
    url: config.apiUrl + '/images',
    method: 'GET',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

const updateFile = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/images/' + formData.image.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

const deleteFile = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/images/' + formData.image.id,
    method: 'DELETE',
    headers: { Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  uploadFile,
  getFiles,
  updateFile,
  deleteFile
}
