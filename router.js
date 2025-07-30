import { HomeView } from './views/home.js';
import { AboutView } from './views/about.js';
import { ServicesView } from './views/services.js';
import { ContactView } from './views/contact.js';

// Set the base path used in GitHub Pages
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
    const view = routes[path] || AboutView;

    const app = document.getElementById('app');
    const nav = document.getElementById('navbar');
    if (!app || !nav) return;

    app.innerHTML = view();
    nav.innerHTML = navTemplate(path);
}

function navTemplate(currentPath) {
    return `
        <a href="${BASE_PATH}/" data-link><img src="${BASE_PATH}/assets/logo.png" alt="OT Group Logo" class="logo" /></a>
        <div class="nav-container">
            <a href="${BASE_PATH}/about" data-link class="${currentPath === '/about' ? 'active' : ''}">About</a>
            <a href="${BASE_PATH}/services" data-link class="${currentPath === '/services' ? 'active' : ''}">Services</a>
            <a href="${BASE_PATH}/contact" data-link class="${currentPath === '/contact' ? 'active' : ''}">Contact</a>
        </div>
    `;
}

document.body.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (link) {
        e.preventDefault();
        const url = new URL(link.href);
        const path = url.pathname;
        history.pushState({}, '', path);
        render(path);
    }
});

window.addEventListener('popstate', () => render());
window.addEventListener('DOMContentLoaded', () => render());