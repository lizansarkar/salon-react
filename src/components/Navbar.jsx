import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 text-white sm:px-8">
        {/* Logo */}
        <img src="/logo.png" alt=""  className="h-15 w-15"/>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative text-sm uppercase tracking-[0.35em] text-white/70 transition hover:text-[#c9a84c]"
            >
              {link.label}
              {/* Animated underline — left to right */}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-[#c9a84c] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-slate-950"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            // X icon
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="5" x2="17" y2="5" />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Backdrop blur */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[85%] max-w-xs transform bg-slate-950 p-8 text-white transition duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.35em] text-white/80">
            Menu
          </span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white transition"
            aria-label="Close menu"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative w-fit text-sm uppercase tracking-[0.35em] text-white/70 transition hover:text-[#c9a84c]"
            >
              {link.label}
              {/* Animated underline in mobile menu too */}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-[#c9a84c] px-6 py-3 text-sm uppercase tracking-[0.35em] text-[#c9a84c] transition hover:bg-[#c9a84c] hover:text-slate-950"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}