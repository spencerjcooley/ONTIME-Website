export function HomeView(BASE_PATH) {
    return `
        <header>
            <img src="${BASE_PATH}/assets/home/cropped_hero_upscaled.avif" alt="Large truck moving rubble from a construction site">
            <div class="hero-overlay">
                <h1>Welcome to <span>ONTIME</span></h1>
                <p>Your trusted partner in <b>waste management</b> solutions</p>
            </div>
        </header>
        
        <section class="card-section">
            <div class="card">
                <div class="card-text">
                    <h2>About Us</h2>
                    <p>
                        <span>ONTIME</span> is a locally owned Australian waste management company based in Ingleburn.
                        We offer fast, reliable, and cost-effective waste removal and recycling solutions for residential, commercial, and construction sites across Sydney.<br><br>
                        Our innovative waste handling systems improve site safety and efficiency, helping your projects stay on track.
                        Backed by a large team of experienced staff and a modern fleet of equipment, we’re equipped to manage all types of waste—big or small.<br><br>
                        <a href="/${BASE_PATH}/about" data-link>Learn more</a>
                    </p>
                </div>
                <img src="${BASE_PATH}/assets/home/about.avif" alt="About Us">
            </div>
            <div class="card">
                <div class="card-text">
                    <h2>Our Services</h2>
                    <p>
                        From site rubbish removal to licensed excavation and complete waste management, <span>ONTIME</span> handles it all.<br><br>
                        We service Ingleburn and greater Sydney with efficient rubbish collection, up to 80% recycling of construction waste, and expert bobcat/excavator hire.
                        Let us keep your project clean, compliant, and on schedule.<br><br>
                    </p>
                </div>
                <img src="${BASE_PATH}/assets/home/cropped_services.avif" alt="Our Services">
            </div>
        </section>

        <section class="cta">
            <h2>GOT ANY QUESTIONS? CALL <a href="tel:1300866937">1300 866 937</a></h2>
        </section>
    `;
}