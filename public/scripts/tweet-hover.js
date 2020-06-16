$(document).ready(function () {
  const tweetArticles = $('article.tweet');

  tweetArticles.on('mouseenter', function () {
    $(this).find('header').find('div.alias-name').removeClass('hide');
    $(this).find('i').addClass('text-shadow');
  });

  tweetArticles.on('mouseleave', function () {
    $(this).find('header').find('div.alias-name').addClass('hide');
    $(this).find('i').removeClass('text-shadow');
  });
});
