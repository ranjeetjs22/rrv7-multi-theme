// Simple domain to theme mapping - simulates user's purchased themes
const userThemes: Record<string, string> = {
    'theme1.ranjeet.com': 'theme1',
    'theme2.ranjeet.com': 'theme2',
    'localhost': 'default'
};

export function loadTheme() {
    // Check if running in browser environment
    if (typeof window === 'undefined') {
        return;
    }

    const host = window.location.hostname;
    let theme = 'default'; // Default theme as fallback

    // Map hosts to themes
    if (host.includes('theme1')) {
        theme = 'theme1'; // Blue Ocean theme
    } else if (host.includes('theme2')) {
        theme = 'theme2'; // Purple Sunset theme
    }
    // If no specific theme detected, 'default' will be used

    console.log(`Loading theme: ${theme} for host: ${host}`);

    // Remove any existing theme stylesheets
    const existingThemeLinks = document.querySelectorAll('link[data-theme]');
    existingThemeLinks.forEach(link => link.remove());

    // Load theme CSS
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = `/themes/${theme}/theme.css`;
    themeLink.setAttribute('data-theme', 'main');
    document.head.appendChild(themeLink);

    // Load components CSS
    const componentsLink = document.createElement('link');
    componentsLink.rel = 'stylesheet';
    componentsLink.href = `/themes/${theme}/components.css`;
    componentsLink.setAttribute('data-theme', 'components');
    document.head.appendChild(componentsLink);

    // Store current theme in localStorage for consistency
    localStorage.setItem('currentTheme', theme);

    return theme;
}

export function getCurrentTheme(): string {
    if (typeof window === 'undefined') return 'default';
    
    const domain = window.location.hostname;
    return userThemes[domain] || 'default';
}