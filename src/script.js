const usersTable = [
  // Note: This is a fake table for educational purposes. Never store user credentials in plain text.
  { username: 'hello@world.com' },
  { username: 'test@user.com' },
  { username: 'email@domain.com' },
];
let renderSuccess = () => {
  document.getElementById('success-message').hidden = false;
};
let renderEmailTakenError = () => {
  document.getElementById('taken-error-message').hidden = false;
};
let renderEmailEmptyError = () => {
  document.getElementById('empty-error-message').hidden = false;
};
let resetMessage = () => {
  document.getElementById('success-message').hidden = true;
  document.getElementById('taken-error-message').hidden = true;
  document.getElementById('empty-error-message').hidden = true;
};

addEventListener('submit', (event) => {
  event.preventDefault();
  resetMessage();

  let email = document.getElementById('email').value;

  let isEmailTaken = usersTable.some((user) => user.username === email);

  let lastEmail;

  let isEmailRepeated = email === lastEmail;

  if (isEmailTaken) {
    return 'taken-error-message';
  } else if (isEmailRepeated) {
    return 'Repeated';
  } else if (email === '') {
    return 'empty-error-message';
  } else {
    return 'success-message';
  }

  // TODO: Show Correct Status Messages on Signup Form
  // 1. successful signup
  // 2. empty email
  // 3. taken email
  // 4. repeat email
});

let toggleNav = () => {
  let nav = document.getElementById('mobile-nav');
  nav.classList.toggle('show');
};
