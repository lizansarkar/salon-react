import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`cursor-pointer fixed right-6 bottom-6 z-[9999] grid h-12 w-12 place-items-center rounded-full bg-[#c9a84c] text-slate-950 shadow-xl transition-transform duration-200 ease-out ${showTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95 pointer-events-none"}`}
        aria-label="Back to top"
        role="button"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current"
          fill="none"
          strokeWidth="2"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
    </>
  );
}

export default App;
