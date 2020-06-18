// Effect of displaying error message

const displayErrMsg = (errMsg) => {
  const errMsgP = $('#err-msg');
  const prevMsg = errMsgP.text();

  // if there is a prev errMsg, stop the prevMsg jQuery chain
  if (prevMsg) {
    errMsgP.stop();
  }

  // change to new err msg and add the class
  errMsgP.text(errMsg);
  errMsgP.addClass('error-msg');

  errMsgP.slideDown().delay(3000).slideUp();
};
