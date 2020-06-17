const writeNewTweetBtnEffect = () => {
  const writeTweetBtn = $('.write-tweet-btn');
  const arrowIcon = $('.write-tweet-btn i ');
  const newTweetSec = $('.new-tweet');
  const textarea = $('#tweet-text');

  writeTweetBtn.on('mouseenter', function () {
    arrowIcon.addClass('move-up-and-down');
  });

  writeTweetBtn.on('mouseleave', function () {
    arrowIcon.removeClass('move-up-and-down');
  });

  writeTweetBtn.click(function () {
    newTweetSec.slideToggle('Fast', function () {
      textarea.focus();
    });
  });
};
