const services = [
  {
    title: "Hair Styling",
    desc: "Precision cuts, blowouts, and styling for every occasion.",
    icon: (
      // Scissors icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Hair Coloring",
    desc: "Expert color services including highlights and balayage.",
    icon: (
      // Droplet / color icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0 0 14 0C19 9.5 12 2 12 2z" />
        <path d="M12 18a3 3 0 0 1-3-3" />
      </svg>
    ),
  },
  {
    title: "Beard Grooming",
    desc: "Professional beard shaping and hot towel treatments.",
    icon: (
      // Razor / blade icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="6" rx="2" />
        <line x1="7" y1="9" x2="7" y2="15" />
        <line x1="12" y1="9" x2="12" y2="15" />
        <line x1="17" y1="9" x2="17" y2="15" />
      </svg>
    ),
  },
  {
    title: "Facial Treatments",
    desc: "Rejuvenating facials to refresh and revitalize your skin.",
    icon: (
      // Sparkle / face icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M9 15c.83 1.5 5.17 1.5 6 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Nail Artistry",
    desc: "Manicures, pedicures, and creative nail art.",
    icon: (
      // Hand / nail icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-4 0v5" />
        <path d="M14 10V4a2 2 0 0 0-4 0v6" />
        <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
        <path d="M6 14v1a6 6 0 0 0 12 0v-3a2 2 0 0 0-4 0" />
      </svg>
    ),
  },
  {
    title: "Bridal Packages",
    desc: "Complete bridal styling from head to toe.",
    icon: (
      // Crown icon
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 17L5 7l5 5 4-8 4 8 5-5 3 10H2z" />
        <line x1="2" y1="21" x2="22" y2="21" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            What We Offer
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
            Our Services
          </h2>
          <div className="gold-line mx-auto mt-6"></div>
          <p className="mt-6 text-base leading-8 text-slate-600">
            From precision cuts to revitalizing treatments, we offer a complete
            range of services tailored to your unique style.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-10 text-center transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full border border-slate-200 text-[#c9a84c] transition duration-300 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-slate-950">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}