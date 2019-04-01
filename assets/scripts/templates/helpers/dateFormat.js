// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

// const limit = (str, length) => {
//   if (str.length <= length) {
//     return str
//   } else {
//     return str.substring(0, length) + '...'
//   }
// }

const dateFormat = (str) => {
  const date = new Date(str)
  return date.toLocaleString()
}

module.exports = dateFormat
