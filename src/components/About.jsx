const features = [
  { title: "Premium Products", desc: "We use only the finest products." },
  { title: "Expert Stylists", desc: "Trained at the best academies globally." },
  { title: "Hygiene First", desc: "Strict sterilization protocols." },
  { title: "Personal Touch", desc: "Customized to your unique preferences." },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/e6/0a/8a/e60a8aa5c32b61ac34d44230d416d36d.jpg"
              alt="Professional Salon Team"
              className="h-full w-full object-cover"
            />
            <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/90 px-6 py-4 text-slate-950 shadow-xl">
                <span className="text-4xl font-semibold">15+</span>
                <span className="text-sm uppercase tracking-[0.35em]">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
              Our Story
            </span>
            <h2 className="section-title mt-6 text-white">
              Crafting Beauty Since 2009
            </h2>
            <div className="gold-line mt-6"></div>
            <p className="section-subtitle mt-6 text-slate-300">
              At Rangpuri, we believe that everyone deserves to feel
              extraordinary. Our team combines timeless techniques with modern
              innovation.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a84c]/10 text-[#c9a84c]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 stroke-current"
                      fill="none"
                      strokeWidth="1.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
