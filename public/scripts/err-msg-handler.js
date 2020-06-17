const displayErrMsg = (errMsg) => {
  const errMsgP = $('#err-msg');
  const prevMsg = errMsgP.text();

  errMsgP.text(errMsg);
  errMsgP.addClass('error-msg');

  if (prevMsg) {
    hideErrMsg();
  }
  errMsgP.slideDown().delay(3000).slideUp();
};

const hideErrMsg = () => {
  const errMsgP = $('#err-msg');
  //   errMsgP.empty();

  errMsgP.stop();
};

/* 
displayErrMsg
  //   if (!prevMsg) {
  //     errMsgP.slideDown();
  //   }

  //   errMsgP.slideDown();

hideErrMsg
  //   errMsgP.slideUp();

*/
