import "../components/hamburger.js";

function validateName(name) {
    const namePattern = /^[A-Za-z\s]{2,}$/;
    if (!namePattern.test(name)) {
        return false;
    } 
    return name.trim() !== '';
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return false;
    }
    return email.trim() !== '';
}

function validateMessage(message) {
    return message.trim() !== '';
}

const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
if (nameInput && nameError) {
    nameInput.addEventListener('input', () => {
        if (validateName(nameInput.value)) {
            nameError.textContent = '';
        } else {
            nameError.textContent = 'Name is required.';
        }
    });
} else {
    console.error('Name input or error element not found.');
}

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
if (emailInput && emailError) {
    emailInput.addEventListener('input', () => {
        if (validateEmail(emailInput.value)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }
    });
} else {
    console.error('Email input or error element not found.');
}

const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');
if (messageInput && messageError) {
    messageInput.addEventListener('input', () => {
        if (validateMessage(messageInput.value)) {
            messageError.textContent = '';
        } else {
            messageError.textContent = 'Message is required.';
        }
    });
} else {
    console.error('Message input or error element not found.');
}

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;
        if (!validateName(nameInput.value)) {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }
        if (!validateMessage(messageInput.value)) {
            messageError.textContent = 'Message is required.';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit it here
            successMessage.textContent = 'Successfully submitted!';
            contactForm.reset(); // Reset the form fields
        }
    });
} else {
    console.error('Contact form or success message element not found.');
}