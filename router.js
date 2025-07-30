import { HomeView } from './views/home.js';
import { AboutView } from './views/about.js';
import { ServicesView } from './views/services.js';
import { ContactView } from './views/contact.js';

const routes = {
    '/': HomeView,
    '/home': HomeView,
    '/about': AboutView,
    '/services': ServicesView,
    '/contact': ContactView,
};

function render(path = location.pathname) {
    const view = routes[path] || AboutView;
    const app = document.getElementById('app');
    const nav = document.getElementById('navbar');
    if (!app || !nav) return;

    app.innerHTML = view();
    nav.innerHTML = navTemplate(path);
}

function navTemplate(currentPath) {
    return `
        <a href="/" data-link><img src="assets/logo.png" alt="OT Group Logo" class="logo" /></a>
        <div class="nav-container">
            <a href="/about" data-link class="${currentPath === '/about' ? 'active' : ''}">About</a>
            <a href="/services" data-link class="${currentPath === '/services' ? 'active' : ''}">Services</a>
            <a href="/contact" data-link class="${currentPath === '/contact' ? 'active' : ''}">Contact</a>
        </div>
    `;
}

document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        history.pushState({}, '', path);
        render(path);
    }
});

window.addEventListener('popstate', () => render());
window.addEventListener('DOMContentLoaded', () => render());