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
  errMsgP.stop();
};
