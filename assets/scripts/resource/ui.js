//  on successes & failures
'use strict'
// const store = require('../store.js')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
const showUserImagesTemplate = require('../templates/user-images.handlebars')

const uploadFileSuccess = (responseData) => {
  $('form').trigger('reset')
  $('.user-messages').text('Uploaded Successfully!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

const getFilesSuccess = (data) => {
  // const showImagesHtml = showAllImagesTemplate({ images: data.images })
  //   $('#content').html(showImagesHtml)
}

const updateFileSuccess = () => {
  $('form').trigger('reset')
  $('.user-messages').text('Successfully updated!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
}

const deleteFileSuccess = (id) => {
  $('.user-messages').text('File Deleted!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
}

const failure = () => {
  $('form').trigger('reset')
  $('.user-messages').text('Something went wrong.')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('body').removeClass('modal-open')
}

module.exports = {
  uploadFileSuccess,
  getFilesSuccess,
  updateFileSuccess,
  deleteFileSuccess,
  failure
}
