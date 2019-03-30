//  on successes & failures
'use strict'
// const store = require('../store.js')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
// const showUserImagesTemplate = require('../templates/user-images.handlebars')

const uploadFileSuccess = (responseData) => {
  console.log('inside uploadFileSuccess: ', responseData)
  $('#image-location').html(`
      <img alt="user uploaded image" src="${responseData.image.url}" width="100%" />
      `)
  $('form').trigger('reset')
  $('.user-messages').text('Uploaded Successfully!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
}

const getFilesSuccess = (responseData) => {
  const showAllImagesHtml = showAllImagesTemplate({ images: responseData.images })
  $('#content').append(showAllImagesHtml)
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
  $('.deleteModal').modal('hide')
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
