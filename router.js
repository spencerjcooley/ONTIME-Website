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
    return fullPath.startsWith(BASE_PATH)
        ? fullPath.slice(BASE_PATH.length) || '/'
        : '/';
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
}

function navTemplate(currentPath) {
    return `
        <a href="${BASE_PATH}/" data-link>
            <img src="${BASE_PATH}/assets/logo.avif" alt="OT Group Logo" class="logo" />
        </a>
        <button class="nav-toggle" aria-label="Toggle navigation">&#9776;</button>
        <div class="nav-container">
            <a href="${BASE_PATH}/about" data-link class="${currentPath === '/about' ? 'active' : ''}">About</a>
            <a href="${BASE_PATH}/services" data-link class="${currentPath === '/services' ? 'active' : ''}">Services</a>
            <a href="${BASE_PATH}/contact" data-link class="${currentPath === '/contact' ? 'active' : ''}">Contact</a>
        </div>
    `;
}

function initNavbar() {
    const navToggle = document.querySelector('.nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    if (!navToggle || !navContainer) return;

    navToggle.addEventListener('click', () => {
        navContainer.classList.toggle('hidden');
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth < 700) {
            navContainer.classList.add('hidden');
        } else {
            navContainer.classList.remove('hidden')
        }
    });
}

document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        const url = new URL(link.href);
        const fullPath = url.pathname;
        const relativePath = getRelativePath(fullPath);
        history.pushState({}, '', `${BASE_PATH}${relativePath}`);
        render(`${BASE_PATH}${relativePath}`);
    }
});

window.addEventListener('popstate', () => render());
window.addEventListener('DOMContentLoaded', () => { render() });