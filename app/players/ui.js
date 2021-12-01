// A function to run when we successfully get all of the books from the API
const onIndexPlayersSuccess = function (responseData) {
	// extract the books from our response data into a variable to make it easier to use
	const players = responseData.players;
	console.log(responseData);

	// create a string that will store all of our books as html
	// so we can use the `.html` method, to display the books on the page later
	let playersHtml = '';

	// loop over all of the books
	players.forEach((player) => {
		// add html for each book, to the booksHtml variable
		playersHtml += `
      <div>
      <h4>Name: ${player.name}</h4>
      <p>position: ${player.position}</p>
      <p>number: ${player.number}</p>
      <p>college: ${player.college}</p>
      <p>draft: ${player.draft}</p>
      <p>ID: ${player._id}</p>
        <!-- Add the players's id to the delete button. We can access
             it with jQuery's .data() method later in events.js -->
        <button class="players-destroy-dynamic" data-id=${player._id} data-title="${player.title}">Destroy Player</button>
				<form id ="update-form">
            <input type="text" name="player[name]" placeholder="Name" required>
            <input type="text" name="player[position]" placeholder="Position" required>
            <input type="text" name="player[number]" placeholder="Number" required>
            <input type="text" name="player[college]" placeholder="College" required>
            <input type="text" name="player[draft]" placeholder="Draft" required>
						<button>Update Player</button>
				</form>
      </div>
    `;
	});

	// select the div with id books-display ($('#books-display'))
	// and update its html, to be the html of all the books we want to show
	$('#players-display').html(playersHtml);
};

const onShowPlayerSuccess = function (responseData) {
	// extract the book object from our response's data
	const player = responseData.player;
	console.log(responseData);

	// create the html to display a single book
	const playerHtml = `
    <div>
    <h4>Name: ${player.name}</h4>
    <p>Position: ${player.position}</p>
    <p>Number: ${player.number}</p>
    <p>College: ${player.college}</p>
    <p>Draft: ${player.draft}</p>
    <p>ID: ${player._id}</p>
    </div>
  `;

	// for the div with the id books-display,
	// set its html to be our book's html
	$('#players-display').html(playerHtml);
	// select every form on the page, then reset those forms
	// (clear the inputs)
	$('form').trigger('reset');
};

// give the title parameter the default of 'Book'
const onDestroyPlayerSuccess = function (title = 'Player') {
	// showing the title of the book that was destroyed
	$('#players-display').text(`${title} was destroyed successfully`);

	// $('#books-display').text('Book was destroyed successfully')
	// select the div with the id `books-display` add the bootstrap
	// class of `text-success` to make the text green
	$('#players-display').addClass('text-success');

	// alternatively, we could add our own custom css class in index.scss
	// $('#books-display').addClass('success')

	// after 5 seconds (5000 milliseconds), run our callback function
	setTimeout(() => {
		// remove the message from books-display
		$('#players-display').html('');
		// remove the green color causes by `text-success`
		$('#players-display').removeClass('text-success');
	}, 5000);

	$('form').trigger('reset');
};

const onUpdatePlayerSuccess = function () {
	$('#players-display').text('Player was updated successfully');
	$('#players-display').addClass('text-success');

	// after 5 seconds (5000 milliseconds), run our callback function
	setTimeout(() => {
		// remove the message from books-display
		$('#players-display').html('');
		// remove the green color causes by `text-success`
		$('#players-display').removeClass('text-success');
	}, 5000);

	$('form').trigger('reset');
};


// show the book after it is created
const onCreatePlayerSuccess = function (responseData) {
	// extract the book object from our response's data
	const player = responseData.player;
	console.log(responseData);

	// create the html to display a single book
	const playerHtml = `
    <div>
    <h6>You Successfully added a player!</h6>
      <h4>Name: ${player.name}</h4>
      <p>Position: ${player.position}</p>
      <p>Number: ${player.number}</p>
      <p>College: ${player.college}</p>
      <p>Draft: ${player.draft}</p>
      <p>ID: ${player._id}</p>
    </div>
  `;

	// for the div with the id books-display,
	// set its html to be our book's html
	$('#players-display').html(playerHtml);

	$('form').trigger('reset');
};

// A function to run anytime any error occurs
const onError = function (err) {
	// if an error occurs, we will log the error (err)
	console.error(err);

	$('#error-message').text('Something went wrong, please try again');
	// make our error-message red, by adding the bootstrap text-danger class
	$('#error-message').addClass('text-danger');

	// after 5 seconds (5000 milliseconds), run our callback function
	setTimeout(() => {
		// remove the message from books-display
		$('#error-message').html('');
		// remove the red color caused by `text-danger`
		$('#error-message').removeClass('text-danger');
	}, 5000);

	$('form').trigger('reset');
};

// export our ui success and failure handler functions
// so they can be imported in `events.js`
module.exports = {
	onIndexPlayersSuccess,
	onShowPlayerSuccess,
	onDestroyPlayerSuccess,
	onUpdatePlayerSuccess,
	onCreatePlayerSuccess,
	onError,
};