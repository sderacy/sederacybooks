/**
 * Handles the Light/Dark mode toggle interactions.
 * This script is loaded as a module and runs after the HTML is parsed.
 */
export function initThemeToggle() {
    const handleToggle = () => {
        const element = document.documentElement;
        if (element.classList.contains('dark')) {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    document.addEventListener('click', (event) => {
        const toggleBtn = (event.target as Element | null)?.closest('.theme-toggle');
        if (toggleBtn) {
            handleToggle();
        }
    });
}

initThemeToggle();