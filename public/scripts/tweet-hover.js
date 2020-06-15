$(document).ready(function () {
    const tweetArticle = $('.tweet article');
    const aliasName = $('.alias-name')

    const toggleShow = $('.alias-name');

    tweetArticle.on('mouseenter', function () {
        toggleShow.css('display', 'block');
    })
    tweetArticle.on('mouseleave', function () {
        toggleShow.css('display', 'none');
    })

    // tweetArticle.hover(function () {
    //     // aliasName.addClass('show');
    //     toggleShow.css('display', 'block');
    //     console.log('Hello')
    // }, function () {
    //     // aliasName.removeClass('show');
    //     toggleShow.css('display', 'none');
    //     console.log('Bye')

    // })


});