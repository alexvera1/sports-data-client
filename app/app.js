// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events')
const playerEvents = require('./players/events')


$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)


// ------------------- PLAYER CRUD -------------------- //

  // select the books-index button ($('#books-index'))
  // whenever (on) a click event occurs, run the function
  $('#players-index').on('click', playerEvents.onIndexPlayers)
  // select the books-show form ($('#books-show'))
  // on a submit event, run the `onShowBook` event handler function
  $('#players-show').on('submit', playerEvents.onShowPlayer)
  $('#players-destroy').on('submit', playerEvents.onDestroyPlayer)
  $('#players-update').on('submit', playerEvents.onUpdatePlayer)
  $('#players-create').on('submit', playerEvents.onCreatePlayer)

  // whenever a dynamic destroy button is clicked run bookEvents.onDynamicDestroyBook
  $('#players-display').on('click', '.players-destroy-dynamic', playerEvents.onDynamicDestroyPlayer)

  $('#update-form').on('submit', playerEvents.onUpdateForm)


  // $('#event-button').on('click', () => {
  //   console.log('the event button was clicked')
  // })

  $('#event-div').on('click', () => {
    console.log('the event button was clicked')
  })
})