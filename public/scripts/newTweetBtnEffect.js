// Effect of sliding down the #new-tweet section
// when user clicks on .write-tweet-btn

const newTweetBtnEffect = () => {
  const writeTweetBtn = $('.write-tweet-btn');
  const newTweetSec = $('#new-tweet');
  const textarea = $('#tweet-text');

  writeTweetBtn.click(function () {
    newTweetSec.slideToggle('fast', function () {
      textarea.focus();
    });
  });
};
