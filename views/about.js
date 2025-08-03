export function AboutView(BASE_PATH) {
    return `
        <header>
            <img src="${BASE_PATH}/assets/about/banner.avif" alt="Large truck moving rubble from a construction site">
            <div class="hero-overlay">
                <h1>About <span>US</span></h1>
            </div>
        </header>

        <section class="about-section">
            <div class="about-text">
                <h2>About Us</h2>
                <p>
                    At ON TIME GROUP, we deliver more than just waste removal—we provide a complete, well-structured process to maintain and manage your construction site with efficiency and care.
                    Based in Ingleburn and servicing the entire Sydney Metro Area, we understand that no two sites are the same.
                    Every builder, trade, and project comes with its own challenges—and that’s exactly where the ON TIME System shines.<br><br>

                    We tailor our services to suit your specific requirements while maintaining consistency in delivery, quality, and professionalism.
                    Our team is made up of highly trained, qualified staff who take pride in every job.
                    Whether it’s waste collection, site maintenance, or excavation, we focus on doing it right the first time—with attention to detail, accuracy, and full compliance.<br><br>

                    We believe our difference is simple but powerful: we care about getting the job done properly.<br><br>
                </p>
                <ul>
                    <li>Reliable & Efficient Service</li>
                    <li>Years of Industry Experience</li>
                    <li>Qualified, Insured Professionals</li>
                    <li>Attention to Detail</li>
                    <li>Modern Fleet of Machinery & Vehicles</li>
                    <li>Customised Solutions for Every Site</li>
                </ul>
            </div>
            <div class="about-image">
                <img src="${BASE_PATH}/assets/about/map.svg" alt="Map showing our location">
            </div>
        </section>
    `;
}