// AJAX here

const config = require('../config.js')
// const store = require('../store.js')

const uploadFile = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/images',
    method: 'POST',
    contentType: false,
    processData: false,
    enctype: 'multipart/form-data',
    data: formData
  })
}

module.exports = {
  uploadFile
}
