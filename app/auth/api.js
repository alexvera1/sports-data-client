'use strict'

// require the config file, so have our API's url
const config = require('../config')
// require the store file, so we have access to the store object
// so that we had the user's token when making authenticated requests
const store = require('../store')

// formData will be our credentials object w/ email, password, and confirmation
const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

// formData will be our credentials object w/ email, password
const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const changePassword = function(formData) {
    return $.ajax({
        url: `${config.apiUrl}/change-password`,
        method: 'PATCH',
        data: formData,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const signOut = function (formData) {
  // make a request to DELETE /sing-out
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token,

    }
    })
}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
