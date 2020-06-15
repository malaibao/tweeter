$(document).ready(function () {
  const tweetText = $('#tweet-text');
  const counter = $('.counter');

  tweetText.on('input', function () {
    const counterVal = 140 - tweetText.val().length;
    counter.text(counterVal);

    if (counterVal < 0) {
      counter.addClass('red-text');
    } else {
      counter.removeClass('red-text');
    }
  });
});
