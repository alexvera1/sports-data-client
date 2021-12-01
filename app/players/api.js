// require the config file, so we have access to our API's url
const config = require('../config')
const store = require('../store')

// this function, will make a request to GET /books (all the books)
const index = function () {
  // make sure to `return` the promise from $.ajax
  return $.ajax({
    // optional: because the default is 'GET'
    method: 'GET',
    // the url to our api + the url path (/books)
    url: config.apiUrl + '/players',
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }

    // Bad practice: We are hard coding the url to our API below.
    // This is bad, because in future units, we will have multiple APIS
    // (a local and deployed API.)
    // url: 'https://library-express-api.herokuapp.com/books'
  })
}

// this function will make a GET request, for a single book
// id - of the book we want to show
const show = function (id) {
  return $.ajax({
    // optional: same method as index
    method: 'GET',
    // use the path to a single book
    url: config.apiUrl + '/players/' + id,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// this function will make a DELETE request, for a single book
// id - of the book we want to destroy
const destroy = function (id) {
  return $.ajax({
    // use the delete http method
    method: 'DELETE',
    // this is the same url as SHOW
    url: config.apiUrl + '/players/' + id,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// this function will make a PATCH request, for a single book
// id - of the book we want to update
const update = function (id, formData) {
  console.log('formData is', formData)
  return $.ajax({
    // use the PATCH method to update a book
    method: 'PATCH',
    // the same url as show & destroy
    url: config.apiUrl + '/players/' + id,
    // when making our $.ajax request, include the formData
    // so it has the new title & author
    data: formData,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// this function will make a POST request to create a single book
const create = function (formData) {
  console.log('formData is', formData)
  return $.ajax({
    // use the POST method to create a book
    method: 'POST',
    // the same url as show & destroy
    url: config.apiUrl + '/players',
    // when making our $.ajax request, include the formData
    // so it has the new title & author
    data: formData,
    headers: {
        Authorization: 'Bearer ' + store.user.token
    }
  })
}

// export the api function `index`, so it can be called in `events.js`
module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
// console.log('the module.exports object is', module.exports)