import { HomeView } from './views/home.js';
import { AboutView } from './views/about.js';
import { ContactView } from './views/contact.js';

// GitHub Pages base path (remove when deploying to custom domain)
const BASE_PATH = '/ONTIME-Website';

const routes = {
    '/': HomeView,
    '/home': HomeView,
    '/about': AboutView,
    '/contact': ContactView,
};

function getRelativePath(fullPath) {
    let path = fullPath.startsWith(BASE_PATH)
        ? fullPath.slice(BASE_PATH.length)
        : fullPath;
    if (!path.startsWith('/')) path = '/' + path;
    if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path || '/';
}

function navTemplate(currentPath) {
    const links = [
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' }
    ];
    return `
        <a href="${BASE_PATH}/" data-link>
            <img src="${BASE_PATH}/assets/logo.avif" alt="OT Group Logo" class="logo" />
        </a>
        <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
        <div class="nav-container">
            ${links.map(link =>
                `<a href="${BASE_PATH}${link.path}" data-link class="${currentPath === link.path ? 'active' : ''}">${link.label}</a>`
            ).join('')}
        </div>
    `;
}

function updateNav(currentPath) {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    nav.innerHTML = navTemplate(currentPath);

    const navToggle = nav.querySelector('.nav-toggle');
    const navContainer = nav.querySelector('.nav-container');

    if (!navToggle || !navContainer) return;

    navToggle.onclick = () => navContainer.classList.toggle('hidden');
    handleNavVisibility(navContainer);
}

function handleNavVisibility(navContainer) {
    if (window.innerWidth < 700) {
        navContainer.classList.add('hidden');
    } else {
        navContainer.classList.remove('hidden');
    }
}

function render(fullPath = location.pathname) {
    const path = getRelativePath(fullPath);
    const view = routes[path] || HomeView;

    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = view(BASE_PATH);
    const footer = document.getElementById('footer');
    if (footer) footer.innerHTML = `<p>&copy; 2025 ONTIME GROUP PTY LTD</p>`;
    
    updateNav(path);
    window.scrollTo(0, 0);
}

// SPA-style link interception
document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;

    e.preventDefault();
    const url = new URL(link.href, window.location.origin);
    const relativePath = getRelativePath(url.pathname);
    const fullPath = `${BASE_PATH}${relativePath === '/' ? '' : relativePath}`;

    history.pushState({}, '', fullPath);
    render(fullPath);
});

// One-time resize listener
window.addEventListener('resize', () => {
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) handleNavVisibility(navContainer);
});

// Routing support
window.addEventListener('popstate', () => render());
window.addEventListener('DOMContentLoaded', () => render());