export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="nav-logo">
              RANGPURI<span>.</span>
            </a>
            <p>A premium unisex salon dedicated to the art of beauty.</p>
            <div className="footer-social flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-pink-500 transition duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-blue-600 transition duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* X (Twitter Updated) */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-700 transition duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.9 2H22l-7.4 8.5L23 22h-6.6l-5.2-6.8L4.7 22H1.6l7.9-9.1L1 2h6.8l4.7 6.1L18.9 2z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-green-500 transition duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.65a11.88 11.88 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.89a11.9 11.9 0 0 0-3.43-8.44z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#services">Hair Styling</a>
            <a href="#services">Hair Coloring</a>
            <a href="#services">Beard Grooming</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="#">42 Luxe Avenue, NY</a>
            <a href="#">+1 (212) 555-0198</a>
            <a href="#">hello@aurelia-salon.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rangpuri Salon. All rights reserved.</p>
          <p>
            Designed with <a href="#">♥</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
