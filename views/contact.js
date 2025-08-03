export function ContactView() {
    return `
        <header>
            <img src="../assets/contact/banner.avif" alt="Large truck moving rubble from a construction site">
            <div class="hero-overlay">
                <h1>Contact <span>US</span></h1>
            </div>
        </header>

        <section class="split-section">
            <div class="split-text">
                <h2>Contact Us</h2>
                <ul>
                    <li><b>Telephone</b><a href="tel:1300866937"><br>1300 866 937</a></li><br>
                    <li><b>Email</b><a href="mailto:info@otgroup.com.au"><br>info@otgroup.com.au</a></li><br>
                    <li><b>Head Office</b><br>Floor 0, 27 Stanley Rd, NSW 2565</li>
                </ul>
            </div>

            <div class="contact-form">
                <form action="#" method="post">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    `;
}