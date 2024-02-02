let currentState = false;

export const showPassword = (e) => {
  e.preventDefault();

  const button = e.target.id === "icon" ? e.target.parentElement : e.target;
  const input = button.previousElementSibling;
  const icon = button.querySelector('i');

  currentState = !currentState;
  input.type = currentState ? 'text' : 'password';

  icon.classList.remove( 'bi-eye-slash','bi-eye',);
  icon.classList.add(currentState ? 'bi-eye' : 'bi-eye-slash');
};
