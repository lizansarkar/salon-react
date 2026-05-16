const features = [
  { title: "Premium Products", desc: "We use only the finest products." },
  { title: "Expert Stylists", desc: "Trained at the best academies globally." },
  { title: "Hygiene First", desc: "Strict sterilization protocols." },
  { title: "Personal Touch", desc: "Customized to your unique preferences." }
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="https://www.craftingbeauty.com/wp-content/uploads/2023/09/CULT4-1.jpg" alt="Team" />
            <div className="about-experience">
              <div className="number">15+</div>
              <div className="text">Years Experience</div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Crafting Beauty Since 2009</h2>
            <div className="gold-line"></div>
            <p className="section-subtitle">At Rangpuri, we believe that everyone deserves to feel extraordinary. Our team combines timeless techniques with modern innovation.</p>
            <div className="about-features">
              {features.map((f, i) => (
                <div className="about-feature" key={i}>
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}