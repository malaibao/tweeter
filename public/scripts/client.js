/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac',
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1461113959088,
  },
];

const renderTweets = (tweets) => {
  $.each(tweets, (i, tweetObj) => {
    console.log('hello');
    $('#tweets-container').append(createTweetElement(tweetObj));
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
            ${content}
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

$(document).ready(function () {
  renderTweets(data);
});
