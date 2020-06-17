const addButtonEffect = () => {
  const writeTweetBtn = $('.write-tweet-btn');
  const arrowIcon = $('.write-tweet-btn i ');

  writeTweetBtn.on('mouseenter', function () {
    arrowIcon.addClass('move-up-and-down');
  });

  writeTweetBtn.on('mouseleave', function () {
    arrowIcon.removeClass('move-up-and-down');
  });
};
