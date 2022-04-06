const submit = document.getElementById('submit')
const inputName = document.getElementById('name')
const inputLastName = document.getElementById('last-name')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')





submit.addEventListener('click', () => {

    if (inputName.value === '' || inputName.value === null) {
        inputName.classList.add('input-name-warning');
        document.getElementById('s-name').style.display = 'flex';
        inputName.focus()
    } else {
        inputName.classList.remove('input-name-warning');
        document.getElementById('s-name').style.display = 'none';

    }

    if (inputLastName.value === '' || inputLastName.value === null) {

        inputLastName.classList.add('input-name-warning');
        document.getElementById('s-last-name').style.display = 'flex';
        inputLastName.focus()
    } else {
        inputLastName.classList.remove('input-name-warning');

        document.getElementById('s-last-name').style.display = 'none';
    }

    if (inputEmail.value === '' || inputEmail.value === null) {

        inputEmail.classList.add('input-mail-warning');
        document.getElementById('s-email').style.display = 'flex';
        inputEmail.focus()
    } else {
        inputEmail.classList.remove('input-mail-warning');
        document.getElementById('s-email').style.display = 'none';

    }
    
    if (inputPassword.value === '' || inputPassword.value === null) {
        inputPassword.classList.add('input-pw-warning');
        document.getElementById('s-password').style.display = 'flex';
        inputPassword.focus()
    }else{
        inputPassword.classList.remove('input-pw-warning');
        document.getElementById('s-password').style.display = 'none';

    }
});