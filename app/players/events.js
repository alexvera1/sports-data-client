// import the api functions from `api.js`
const api = require('./api')
// console.log('the api object is', api)
// import the ui success and failure handler functions
const ui = require('./ui')

// import the getFormFields function, to get data out of our form
const getFormFields = require('../../lib/get-form-fields')

// this function is called whenever the `books-index` button is clicked
const onIndexPlayers = () => {
  // make our index request GET /books
  api.index()
    // if our HTTP request to get the books was successful, *then*
    // update our page to show all of the books
    .then(ui.onIndexPlayersSuccess)
    // otherwise, if an error occurred, log it as a red error message
    .catch(ui.onError)
}

const onShowPlayer = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.player.id

  // make an HTTP request, to show a single book based on its id
  api.show(id)
    // if getting a single book was successful, show it on the page
    .then(ui.onShowPlayerSuccess)
    // otherwise, show an error message
    .catch(ui.onError)
}

const onDestroyPlayer = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.player.id

  // make an HTTP request, to destroy a single book based on its id
  api.destroy(id)
    // if destroying a single book was successful, show it on the page
    .then(ui.onDestroyPlayerSuccess)
    // otherwise, show an error message
    .catch(ui.onError)
}

const onUpdatePlayer = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.player.id

  // make an HTTP request, to update a single book based on its id
  // pass `formData` to update the book with a new title & author
  api
    .update(id, formData)
  // if getting a single book was successful, update it on the page
    .then(ui.onUpdatePlayerSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}

const onCreatePlayer = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // make an HTTP request, to create a single book
  // pass `formData` to update the book with a new title & author
  api
    .create(formData)
  // if creating a single book was successful, update it on the page
    .then(ui.onCreatePlayerSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}

const onDynamicDestroyPlayer = (event) => {
  // select the button (event.target) and access its data-id attribute
  const id = $(event.target).data('id')
  // get the title as a data attribute
  const title = $(event.target).data('title')

  // make an HTTP request, to destroy a single book based on its id
  api.destroy(id)
  // if destroying a single book was successful, show it on the page
    // .then(ui.onDestroyBookSuccess)
    // if we wanted to show the title after destroying a book, we could pass it down
    // to our ui function
    .then(() => ui.onDestroyPlayerSuccess(title))
  // otherwise, show an error message
    .catch(ui.onError)
}

const onUpdateForm = (event) => {
  // prevent the default action of the form refreshing the page
  // when it is submitted.
  event.preventDefault()

  // event.target is whatever submitted the event, we are
  // storing it in the user friendly variable `form`
  const form = event.target
  // Get the data out of our `form`
  const formData = getFormFields(form)
  console.log(formData)

  // extract the id from our form's data
  const id = formData.player.id

  // make an HTTP request, to update a single book based on its id
  // pass `formData` to update the book with a new title & author
  api
    .update(id, formData)
  // if getting a single book was successful, update it on the page
    .then(ui.onUpdateBookSuccess)
  // otherwise, show an error message
    .catch(ui.onError)
}






// export the `onIndexBooks` function, so that it can be `imported` and used
// in `app.js`
module.exports = {
  //   onIndexBooks: onIndexBooks
  // since the name and the value are the same, we can use the shorthand syntax
  onIndexPlayers,
  onShowPlayer,
  onDestroyPlayer,
  onUpdatePlayer,
  onCreatePlayer,
  onDynamicDestroyPlayer,
  onUpdateForm
}