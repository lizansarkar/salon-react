const services = [
  { title: "Hair Styling", desc: "Precision cuts, blowouts, and styling for every occasion." },
  { title: "Hair Coloring", desc: "Expert color services including highlights and balayage." },
  { title: "Beard Grooming", desc: "Professional beard shaping and hot towel treatments." },
  { title: "Facial Treatments", desc: "Rejuvenating facials to refresh and revitalize your skin." },
  { title: "Nail Artistry", desc: "Manicures, pedicures, and creative nail art." },
  { title: "Bridal Packages", desc: "Complete bridal styling from head to toe." }
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">From precision cuts to revitalizing treatments, we offer a complete range of services tailored to your unique style.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}