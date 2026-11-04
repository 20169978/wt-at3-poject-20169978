import "../components/hamburger.js";

const projectsFigure = document.getElementById('projects-figure');

if (projectsFigure) {
    projectsFigure.addEventListener('click', () => {
        window.location.href = 'projects.html';
    });
} else {
    console.error('Projects figure element not found.');
}

const aboutMeFigure = document.getElementById('aboutme-figure');
if (aboutMeFigure) {
    aboutMeFigure.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
} else {
    console.error('About Me figure element not found.');
}

const contactSection = document.getElementById('contact-section');
if (contactSection) {
    contactSection.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
} else {
    console.error('Contact section element not found.');
}

const resumeSection = document.getElementById('resume-section');
if (resumeSection) {
    resumeSection.addEventListener('click', () => {
        window.location.href = 'resume.html';
    });
} else {
    console.error('Resume section element not found.');
}