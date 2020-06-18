// Effect of bringing user back to the top of the page
// when #go-up-btn is clicked

const goUpBtnScroll = () => {
  const goUpBtn = $('#go-up-btn');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      goUpBtn.removeClass('hide-btn');
    } else {
      goUpBtn.addClass('hide-btn');
    }
  });

  goUpBtn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
};
