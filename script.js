document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    showRegister.addEventListener('click', function () {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    showLogin.addEventListener('click', function () {
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Add your login logic here
        console.log('Login', { email, password });
    });

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Add your registration logic here
        console.log('Register', { email, password });
    });
});
