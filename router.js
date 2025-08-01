import { HomeView } from './views/home.js';
import { AboutView } from './views/about.js';
import { ServicesView } from './views/services.js';
import { ContactView } from './views/contact.js';

// Set the base path used in GitHub Pages, will be removed when using custom domain
const BASE_PATH = '/ONTIME-Website';
const routes = {
    '/': HomeView,
    '/home': HomeView,
    '/about': AboutView,
    '/services': ServicesView,
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
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
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

function initNavbar() {
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');
    if (!navToggle || !navContainer) return;

    navToggle.onclick = () => navContainer.classList.toggle('hidden');
    handleNavVisibility(navContainer);
    window.addEventListener('resize', () => handleNavVisibility(navContainer));
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
    const nav = document.getElementById('navbar');
    if (!app || !nav) return;
    app.innerHTML = view(BASE_PATH);
    nav.innerHTML = navTemplate(path);
    initNavbar();
    window.scrollTo(0, 0);
}

document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        const url = new URL(link.href, window.location.origin);
        const fullPath = url.pathname;
        const relativePath = getRelativePath(fullPath);
        history.pushState({}, '', `${BASE_PATH}${relativePath === '/' ? '' : relativePath}`);
        render(`${BASE_PATH}${relativePath === '/' ? '' : relativePath}`);
    }
});

window.addEventListener('popstate', () => render());
window.addEventListener('DOMContentLoaded', render);