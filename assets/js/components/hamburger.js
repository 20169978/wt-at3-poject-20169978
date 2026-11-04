const navigation = document.querySelector('nav');

const hamburgerButtons = document.querySelectorAll('.hamburger_button');

if (!hamburgerButtons || !navigation) {
    // Verify that the hamburger button and navigation element exist before adding event listeners
    console.error('Hamburger button or navigation element not found.');
} else {
    navigation.classList.remove('open'); // Ensure the navigation is closed by default

    hamburgerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            navigation.classList.toggle('open');
        });
    });
}