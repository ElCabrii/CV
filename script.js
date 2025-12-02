document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const exportPdfBtn = document.getElementById('export-pdf');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        icon.classList.remove('icon-bulb');
        icon.classList.add('icon-energy'); // Change icon for light mode if desired
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        // Save preference
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
            icon.classList.remove('icon-bulb');
            icon.classList.add('icon-energy');
        } else {
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('icon-energy');
            icon.classList.add('icon-bulb');
        }
    });

    exportPdfBtn.addEventListener('click', () => {
        window.print();
    });
});
