//  on successes & failures
'use strict'
const store = require('../store')
const showAllImagesTemplate = require('../templates/all-images.handlebars')
const showLastestUploadTemplate = require('../templates/image-item.handlebars')
const exifJs = require('exif-js')

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

const gpsToDecimalLatLong = function (exifLat, exifLatRef, exifLong, exifLongRef) {
  let latitude = 0
  let longitude = 0
  if (exifLatRef === 'S') {
    latitude = (exifLat[0] * -1) + (((exifLat[1] * -60) + (exifLat[2] * -1)) / 3600)
  } else {
    latitude = exifLat[0] + (((exifLat[1] * 60) + exifLat[2]) / 3600)
  }
  if (exifLongRef === 'W') {
    longitude = (exifLong[0] * -1) + (((exifLong[1] * -60) + (exifLong[2] * -1)) / 3600)
  } else {
    longitude = exifLong[0] + (((exifLong[1] * 60) + exifLong[2]) / 3600)
  }
  return [latitude, longitude]
}

const getFilesSuccess = (responseData) => {
  const showAllImagesHtml = showAllImagesTemplate({ images: responseData.images })
  $('#content').append(showAllImagesHtml)
  setTimeout(() => {
    exifJs.EXIF.getData($('#image-' + responseData.images[0]._id).get()[0], function () {
      const exifLong = exifJs.EXIF.getTag(this, 'GPSLongitude')
      const exifLongRef = exifJs.EXIF.getTag(this, 'GPSLongitudeRef')
      const exifLat = exifJs.EXIF.getTag(this, 'GPSLatitude')
      const exifLatRef = exifJs.EXIF.getTag(this, 'GPSLatitudeRef')
      console.log('Lat/Long: ', gpsToDecimalLatLong(exifLat, exifLatRef, exifLong, exifLongRef))
    })
  }, 5000)
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
