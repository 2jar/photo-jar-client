'use strict' /* global google, map */ // eslint-disable-line no-unused-vars

// see: https://developers.google.com/maps/documentation/javascript/tutorial

let map // eslint-disable-line no-unused-vars

function initMap () { // eslint-disable-line no-unused-vars
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 42.352905169664425,
      lng: -71.05733661912383
    },
    zoom: 17
  })
}
