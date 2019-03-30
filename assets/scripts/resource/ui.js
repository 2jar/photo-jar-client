//  on successes & failures
'use strict'
const store = require('../store')
// const store = require('../store.js')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
const showLastestUploadTemplate = require('../templates/latest-image.handlebars')

const uploadFileSuccess = (responseData) => {
  // $('#image-location').html(`
  //     <img alt="user uploaded image" src="${responseData.image.url}" width="100%" />
  //     `)

  const showLastestUpload = showLastestUploadTemplate({ image: responseData.image })
  $('#content').prepend(showLastestUpload)

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

const updateFileSuccess = (responseData) => {
  $('form').trigger('reset')
  $('.user-messages').text('Successfully updated!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('.modal').modal('hide')
  $('#title-' + responseData.image._id).text('Title: ' + responseData.image.title)
  $('#tag-' + responseData.image._id).text('Tag: ' + responseData.image.tag)
  $('#modified-' + responseData.image._id).text('Modified: ' + responseData.image.updatedAt)
  $('body').removeClass('modal-open')
}

const deleteFileSuccess = () => {
  $('.user-messages').text('File Deleted!')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.deleteModal').modal('hide')
  setTimeout(() => {
    $('#' + store.imageId).remove()
  }, 400)
  console.log('this is store image id', store.imageId)
}

const failure = () => {
  $('form').trigger('reset')
  $('.user-messages').text('Something went wrong.')
  setTimeout(() => {
    $('.user-messages').text('')
  }, 2000)
  $('.modal-backdrop').hide()
  $('.deleteModal').modal('hide')
  $('body').removeClass('modal-open')
}

module.exports = {
  uploadFileSuccess,
  getFilesSuccess,
  updateFileSuccess,
  deleteFileSuccess,
  failure
}
