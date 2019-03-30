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
  console.log('salutations from updatefile api.js', formData)
  return $.ajax({
    url: config.apiUrl + '/images/' + formData.image.id,
    method: 'PATCH',
    headers: { Authorization: 'Token token=' + store.user.token },
    data: formData
  })
}

// const updateFile = (data, id) => {
//   return $.ajax({
//     url: config.apiUrl + '/images' + id,
//     method: 'PATCH',
//     headers: { Authorization: 'Token token=' + store.user.token },
//     data
//   })
// }

const deleteFile = (formData) => {
  console.log('this is the deleteFile api function', formData)
  console.log('this is the delete formData image info', formData.image)
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
