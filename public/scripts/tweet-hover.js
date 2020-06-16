$(document).ready(function () {
    const tweetArticle = $('article.tweet');
    const tweetIcons = $('.tweet i');
    const aliasName = $('.alias-name');

    tweetArticle.on('mouseenter', function () {
        console.log('enter', aliasName);
        aliasName.removeClass('hide');
        tweetArticle.addClass('bolder');
        tweetIcons.addClass('text-shadow');

    })
    tweetArticle.on('mouseleave', function () {
        console.log('exit', aliasName);
        aliasName.addClass('hide');
        tweetArticle.removeClass('bolder');
        tweetIcons.removeClass('text-shadow');

    })
});