//  on successes & failures
'use strict'
const store = require('../store')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
const showLastestUploadTemplate = require('../templates/image-item.handlebars')


const uploadFileSuccess = (responseData) => {
  const showLastestUpload = showLastestUploadTemplate({ image: responseData.image })
  $('#content').prepend(showLastestUpload)
  $('.owner-' + responseData.image._id).text('Owner username: ' + store.user.email)
  $('#upload-photo-modal').modal('hide')
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
  $('.title-' + responseData.image._id).text(responseData.image.title)
  $('.update-title-input-' + responseData.image._id).val(responseData.image.title)
  $('.tag-' + responseData.image._id).text(responseData.image.tag)
  $('.update-tag-input-' + responseData.image._id).val(responseData.image.tag)
  $('.modified-' + responseData.image._id).text('Modified: ' + responseData.image.updatedAt)
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
