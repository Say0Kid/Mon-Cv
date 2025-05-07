const toggleButton = document.querySelector('.toggle-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    // Save preference to localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('mode', 'light');
    } else {
        localStorage.setItem('mode', 'dark');
    }
});

// On page load, check user preference from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
});