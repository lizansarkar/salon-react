export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            {/* Logo */}
            <img src="/logo.png" alt="" className="h-15 w-15" />
            <p className="mt-5 max-w-md text-sm text-slate-400">
              A premium unisex salon dedicated to the art of beauty.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                {
                  href: "https://www.instagram.com/",
                  label: "Instagram",
                  bg: "bg-pink-500 hover:bg-pink-600",
                },
                {
                  href: "https://www.facebook.com/",
                  label: "Facebook",
                  bg: "bg-blue-600 hover:bg-blue-700",
                },
                {
                  href: "https://x.com/",
                  label: "X",
                  bg: "bg-slate-700 hover:bg-slate-600",
                },
                {
                  href: "https://wa.me/8801XXXXXXXXX",
                  label: "WhatsApp",
                  bg: "bg-green-500 hover:bg-green-600",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition ${item.bg}`}
                >
                  <span className="sr-only">{item.label}</span>
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                    {item.label === "Instagram" && (
                      <>
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17" cy="7" r="1" />
                      </>
                    )}
                    {item.label === "Facebook" && (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    )}
                    {item.label === "X" && (
                      <path d="M18.9 2H22l-7.4 8.5L23 22h-6.6l-5.2-6.8L4.7 22H1.6l7.9-9.1L1 2h6.8l4.7 6.1L18.9 2z" />
                    )}
                    {item.label === "WhatsApp" && (
                      <path d="M20.52 3.48A11.91 11.91 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.65a11.88 11.88 0 0 0 5.73 1.46h.01c6.55 0 11.89-5.34 11.89-11.89a11.9 11.9 0 0 0-3.43-8.44z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
              Quick Links
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="#services" className="block hover:text-white">
                Services
              </a>
              <a href="#about" className="block hover:text-white">
                About
              </a>
              <a href="#pricing" className="block hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
              Services
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="#services" className="block hover:text-white">
                Hair Styling
              </a>
              <a href="#services" className="block hover:text-white">
                Hair Coloring
              </a>
              <a href="#services" className="block hover:text-white">
                Beard Grooming
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <a href="#" className="block hover:text-white">
                42 Luxe Avenue, NY
              </a>
              <a href="#" className="block hover:text-white">
                +1 (212) 555-0198
              </a>
              <a href="#" className="block hover:text-white">
                hello@aurelia-salon.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>&copy; 2025 Rangpuri Salon. All rights reserved.</p>
          <p>
            Designed with{" "}
            <a href="#" className="text-[#c9a84c] hover:text-white">
              ♥
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
