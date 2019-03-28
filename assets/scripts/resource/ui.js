//  on successes & failures
'use strict'
// const store = require('../store.js')
const showAllImagesTemplate = require('../templates/all-images.handlebars')

const uploadFileSuccess = (data) => {
  const showImagesHtml = showAllImagesTemplate({ images: data.images })
  $('#content').html(showImagesHtml)
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
