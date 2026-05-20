export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/281/534/small/hairdressing-tools-arranged-on-a-shelf-in-soft-light-for-styling-services-photo.jpg"
          alt="Salon"
          className="h-full w-full object-cover opacity-70 hero-zoom blur-sm"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.35)_0%,rgba(15,23,42,0.15)_35%,rgba(15,23,42,0.8)_100%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
          Premium Unisex Salon
        </span>
        <h1 className="max-w-4xl text-[clamp(42px,7vw,90px)] leading-[0.95] font-heading font-semibold">
          Where Beauty <em className="italic text-[#c9a84c]">Meets</em> Elegance
        </h1>
        <p className="section-subtitle mt-6 max-w-2xl text-slate-200">
          Experience the art of grooming and styling in an atmosphere of refined
          luxury. Your transformation begins here.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn rounded-none border-none bg-[#c9a84c] px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-[#d4b96a]"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="btn btn-outline rounded-none border-white/30 px-8 py-4 text-sm text-white hover:border-[#c9a84c] hover:text-[#c9a84c]"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
