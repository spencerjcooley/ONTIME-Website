export function HomeView(BASE_PATH) {
    return `
        <header>
            <img src="${BASE_PATH}/assets/home/cropped_hero_upscaled.avif" alt="Large truck moving rubble from a construction site">
            <div class="hero-overlay">
                <h1>Welcome to <span>ONTIME</span></h1>
                <p>Your trusted partner in <b>waste management</b> solutions</p>
            </div>
        </header>
    `;
}