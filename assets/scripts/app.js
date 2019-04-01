'use strict' /* global google, map */ // eslint-disable-line no-unused-vars

const authEvents = require('./auth/events.js')
const resourceEvents = require('./resource/events.js')
const GoogleMapsLoader = require('google-maps')
const store = require('./store')

let map // eslint-disable-line no-unused-vars

$(() => {
  authEvents.addHandlers()
  resourceEvents.addHandlers()
  GoogleMapsLoader.KEY = 'AIzaSyAF7N8MH7vYBoQw0nt6Ed_pLcmuapkp0AU'
  GoogleMapsLoader.load(function (google) {
    store.map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 42.352905169664425,
        lng: -71.05733661912383
      },
      zoom: 17
    })
  })
})
