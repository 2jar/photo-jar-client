'use strict'

const authEvents = require('./auth/events.js')
const resourceEvents = require('./resource/events.js')

$(() => {
  authEvents.addHandlers()
  resourceEvents.addHandlers()
})
