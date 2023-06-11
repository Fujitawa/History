  document.addEventListener('DOMContentLoaded', (event) => {
        const darkModeToggle = document.querySelector('#change');

        // Check if dark mode was enabled before
        if (localStorage.getItem('dark') === 'true') {
            document.body.classList.add('dark');
        }

        darkModeToggle.onclick = function() {
            document.body.classList.toggle('dark');

            // Save dark mode status
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('dark', 'true');
            } else {
                localStorage.setItem('dark', 'false');
            }
        }
    });