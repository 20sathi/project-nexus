

document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const errorMessages = document.getElementById('errorMessages');

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.add('active-form');
        signupForm.classList.remove('active-form');
    });

    signupBtn.addEventListener('click', () => {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.add('active-form');
        loginForm.classList.remove('active-form');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessages.innerHTML = '';

        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        let errors = [];

        if (name.length < 3) {
            errors.push('Name must be at least 3 characters long.');
        }
        if (!validateEmail(email)) {
            errors.push('Invalid email address.');
        }
        if (password.length < 6) {
            errors.push('Password must be at least 6 characters long.');
        }

        if (errors.length > 0) {
            errors.forEach(error => {
                const errorElement = document.createElement('p');
                errorElement.textContent = error;
                errorMessages.appendChild(errorElement);
            });
        } else {
            // Proceed with form submission or further processing
            console.log('Form submitted');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
