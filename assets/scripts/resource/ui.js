//  on successes & failures
'use strict'
// const store = require('../store.js')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
const showUserImagesTemplate = require('../templates/user-images.handlebars')

const uploadFileSuccess = (data) => {
  const showImagesHtml = showAllImagesTemplate({ images: data.images })
  $('#content').html(showImagesHtml)
}

const viewUserFileSuccess = (data) => {
  const showUserImagesHtml = showUserImagesTemplate({ images: data.images })
  $('#content').html(showUserImagesHtml)
}

const failure = () => {
  $('.user-messages').text('Something went wrong when uploading image file.')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

module.exports = {
  uploadFileSuccess,
  viewUserFileSuccess,
  failure
}
