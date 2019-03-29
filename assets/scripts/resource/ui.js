//  on successes & failures
'use strict'
// const store = require('../store.js')

const uploadFileSuccess = (responseData) => {
  console.log(responseData)
  $('#image-location').html(`
        <img alt="user uploaded image" src="${responseData.image.url}" />
        `)
}

const failure = () => {
  $('.user-messages').text('Something went wrong when uploading image file.')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

module.exports = {
  uploadFileSuccess,
  failure
}
