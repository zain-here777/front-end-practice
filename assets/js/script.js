const toggleBtn = document.getElementById('toggle-btn');
const container = document.querySelector('.container');

// Function to set the mode in localStorage
const setMode = (mode) => {
    localStorage.setItem('mode', mode);
};

// Function to apply the saved mode
const applySavedMode = () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        container.classList.add('dark-mode');
    } else if (savedMode === 'light') {
        container.classList.add('light-mode');
    }
};

// Apply saved mode when the page loads
applySavedMode();

toggleBtn.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    container.classList.toggle('light-mode');

    // Determine the current mode and store it in localStorage
    const currentMode = container.classList.contains('dark-mode') ? 'dark' : 'light';
    setMode(currentMode);
});
