// Effect of toggling counter text-color to red if over character limit

const counterTextEffect = () => {
  const tweetText = $('#tweet-text');
  const counter = $('.counter');

  tweetText.on('input', function () {
    const counterVal = 140 - tweetText.val().length;
    counter.text(counterVal);

    counter.toggleClass('red-text', counterVal < 0);
  });
};
