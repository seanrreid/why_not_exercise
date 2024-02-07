document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM READY');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const setTheme = (newThemeName, oldThemeName) => {
        localStorage.setItem('theme', newThemeName);

        const root = document.querySelector('html');
        root.classList.remove(oldThemeName);
        root.classList.add(newThemeName);
    };

    setTheme('theme-light', 'theme-dark');
    if (prefersDark.matches) {
        // set the class for the theme
        setTheme('theme-dark', 'theme-light');
    }

    const toggleBtn = document.querySelector('#toggle');
    toggleBtn.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'theme-dark') {
            setTheme('theme-light', 'theme-dark');
        }
        if (currentTheme === 'theme-light') {
            setTheme('theme-dark', 'theme-light');
        }
    });
});
