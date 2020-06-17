/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape = (str) => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweets = (tweets) => {
  $.each(tweets, (i, tweetObj) => {
    $('#tweets-container').prepend(createTweetElement(tweetObj));
  });
};

const createTweetElement = (tweetObj) => {
  const user = tweetObj.user;
  const content = tweetObj.content.text;
  const duration = Math.floor(
    (Date.now() - tweetObj.created_at) / (1000 * 60 * 60 * 24)
  );

  return `
    <article class='tweet'>
        <header>
            <div><img src="${user.avatars}"> ${user.name}</div>
            <div class='alias-name hide'>${user.handle}</div>
        </header>
        <p>
            ${escape(content)}
        </p>
        <footer>
            <div>
                ${duration} days ago
            </div>
            <div>
                <i class="fas fa-flag"></i> <i class="fas fa-retweet"></i> <i class="fas fa-heart"></i>
            </div>
        </footer>
    </article>`;
};

const loadTweets = () => {
  $.get('/tweets', function (data) {
    renderTweets(data);
    addTweetHoverEffect();
  })
    .done(() => console.log('Done with AJAX GET request'))
    .fail(() => console.log('Oops! Problem with GET request'));
};

$(document).ready(function () {
  loadTweets();
  addButtonEffect();

  const formTarget = $('#tweet-form');

  formTarget.on('submit', function (e) {
    e.preventDefault();

    // validate form data
    const errorMsg = validateForm();
    // if (errorMsg) {
    //   displayErrMsg(errorMsg);
    //   return;
    // } else {
    //   hideErrMsg();
    // }

    // hideErrMsg();
    // if (errorMsg) {
    //   displayErrMsg(errorMsg);
    //   return;
    // }

    if (errorMsg) {
      displayErrMsg(errorMsg);
      return;
    }

    const data = $(this).serialize();
    $.post('/tweets', data)
      .done(() => {
        console.log('Done with AJAX POST request');

        // clear container and load tweets again
        $('#tweets-container').empty();
        loadTweets();

        // set tweetarea values back to default
        $('#tweet-text').val('');
        $('.counter').val(140);
      })
      .fail(() =>
        console.log('oh no! Something wrong with sending POST request.')
      );
  });
});

/* $.post and $.get are shorthands of $.ajax */
/* I tried with $.ajax (works!) before I converted them */
