// AJAX here

const config = require('../config.js')
const store = require('../store.js')

const uploadFile = (formData) => {
  console.log(formData)
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

module.exports = {
  uploadFile
}
