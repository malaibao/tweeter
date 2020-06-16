/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const renderTweets = (tweets) => {
  $.each(tweets, (i, tweetObj) => {
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

const addTweetHoverEffect = () => {
  const tweetArticles = $('article.tweet');

  tweetArticles.on('mouseenter', function () {
    $(this).find('header').find('div.alias-name').removeClass('hide');
    $(this).find('i').addClass('text-shadow');
  });

  tweetArticles.on('mouseleave', function () {
    $(this).find('header').find('div.alias-name').addClass('hide');
    $(this).find('i').removeClass('text-shadow');
  });
};

const loadTweets = () => {
  $.get('/tweets', function (data, status) {
    console.log('inside ajax of loadTweets');
    console.log(data);
    renderTweets(data);
    addTweetHoverEffect();
  })
    .done(() => {
      console.log('Done with AJAX GET request');
    })
    .fail(() => console.log('Oops! Problem with GET request'));
};

$(document).ready(function () {
  // renderTweets(data);
  loadTweets();
  const formTarget = $('#tweet-form');
  formTarget.on('submit', function (e) {
    e.preventDefault();
    const data = $(this).serialize();

    $.post('/tweets', data)
      .done(() => {
        console.log('Done with AJAX POST request');
      })
      .fail(() => {
        console.log('oh no! Something wrong with sending POST request.');
      });

    /* Another method, i dont wanna delete this part */
    // const success = () => {
    //   console.log('inside success');
    // };

    // $.ajax({
    //   type: 'POST',
    //   url: '/tweets',
    //   data: data,
    //   success: success,
    // }).then(function () {
    //   console.log('OKAY!!');
    // });
  });
});
