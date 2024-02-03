let currentState = false;

export const showPassword = (e) => {
    e.preventDefault();
    
    const button = e.target.id == "icon"? e.target.parentElement : e.target;
    const input = button.previousElementSibling;
    const icon = button.querySelector('.bi');

    currentState = !currentState;

    currentState? input.type = 'text' : input.type = 'password';
    currentState? icon.classList.remove('bi-eye-slash') : icon.classList.remove('bi-eye');
    currentState? icon.classList.add('bi-eye') : icon.classList.add('bi-eye-slash');
}
