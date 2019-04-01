//  onUploadFile, onCRUD & event handlers
'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const exifJs = require('exif-js')

const onUploadFile = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  api.uploadFile(formData)
    .then(ui.uploadFileSuccess)
    .catch(ui.failure)
}

const onUpdateFile = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateFile(formData)
    .then(ui.updateFileSuccess)
    .catch(ui.failure)
}

const onDeleteFile = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  store.imageId = formData.image.id
  api.deleteFile(formData)
    .then(ui.deleteFileSuccess)
    .catch(ui.failure)
}

const onOpenMap = (event) => {
  console.log('inside onOpenMap')
  const img = $('#image-' + $(event.target).data('id')).get()[0]

  exifJs.EXIF.getData(img, function () {
    const exifLong = exifJs.EXIF.getTag(this, 'GPSLongitude')
    const exifLongRef = exifJs.EXIF.getTag(this, 'GPSLongitudeRef')
    const exifLat = exifJs.EXIF.getTag(this, 'GPSLatitude')
    const exifLatRef = exifJs.EXIF.getTag(this, 'GPSLatitudeRef')
    console.log('exifLong: ', exifLong)
    if (typeof exifLong !== 'undefined') {
      console.log('Lat/Long: ', gpsToDecimalLatLong(exifLat, exifLatRef, exifLong, exifLongRef))
    } else {
      console.log('image has no GPS data')
    }
  })
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

const addHandlers = () => {
  $('#upload-form').on('submit', onUploadFile)
  $('#content').on('submit', '.update-image-form', onUpdateFile)
  $('body').on('submit', '.delete-image-form', onDeleteFile)
  $('body').on('click', '.open-map', onOpenMap)
}

module.exports = {
  addHandlers
}
