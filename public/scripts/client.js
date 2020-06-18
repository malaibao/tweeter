$(document).ready(function () {
  // get tweets when the page is loaded
  // from tweetsHandler.js
  loadTweets();

  // register effect on 'Write New Tweet' btn - writeTweetBtnEffect.js
  // counter text effect - counterTextEffect.js
  // go-up-btn scroll logic - goUBtnEffect.js
  newTweetBtnEffect();
  counterTextEffect();
  goUpBtnScroll();

  // register form submission - formSubmissionHandler.js
  formSubmissionHandler();
});
