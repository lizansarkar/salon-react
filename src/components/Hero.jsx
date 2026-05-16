export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/072/281/534/small/hairdressing-tools-arranged-on-a-shelf-in-soft-light-for-styling-services-photo.jpg" alt="Salon" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-label">Premium Unisex Salon</p>
        <h1 className="hero-title">Where Beauty <em>Meets</em> Elegance</h1>
        <p className="hero-subtitle">Experience the art of grooming and styling in an atmosphere of refined luxury. Your transformation begins here.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Book Appointment</a>
          <a href="#services" className="btn btn-outline">Our Services</a>
        </div>
      </div>
    </section>
  )
}