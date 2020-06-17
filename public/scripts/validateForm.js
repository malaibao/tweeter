const validateForm = () => {
  const formValue = document.getElementById('tweet-text').value;
  if (formValue.length > 140) {
    return 'Your tweet content is too long.';
  }

  if (!formValue) {
    return 'Oops. There is no tweet to submit.';
  }
  return '';
};
