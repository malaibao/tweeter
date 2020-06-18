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
  // emtpy the tweets container, avoid redundancy
  $('#tweets-container').empty();

  $.get('/tweets', function (data) {
    renderTweets(data);
  })
    .done(() => console.log('Done with AJAX GET request'))
    .fail(() => console.log('Oops! Problem with GET request'));
};
