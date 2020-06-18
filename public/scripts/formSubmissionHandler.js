// Handle the logic of form submission
// check form input and decide whether to proceed to POST request

const formSubmissionHandler = () => {
  const formTarget = $('#tweet-form');
  formTarget.on('submit', function (e) {
    e.preventDefault();

    // validate form data from validateForm.js
    const errorMsg = validateForm();

    if (errorMsg) {
      displayErrMsg(errorMsg); // from errMsgHandler.js
      return;
    }

    // AJAX POST request
    const data = $(this).serialize();
    $.post('/tweets', data)
      .done(() => {
        console.log('Done with AJAX POST request');

        // load tweets again
        loadTweets();

        // set tweetarea values back to default
        $('#tweet-text').val('');
        $('.counter').val(140);
      })
      .fail(() =>
        console.log('oh no! Something wrong with sending POST request.')
      );
  });
};

/* $.post and $.get are shorthands of $.ajax */
/* I tried with $.ajax (works!) before I converted them */
