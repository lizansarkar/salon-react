const images = [
  { src: "https://img.freepik.com/free-psd/barbershop-social-media-square-flyer-instagram-haircut-post-banner-template_505751-7328.jpg?semt=ais_hybrid&w=740&q=80", title: "Balayage Perfection", cat: "Coloring", large: true },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvANgzPqJvsJag6RhkAmYNftqNAVb4FxnlKg&s", title: "Classic Bob", cat: "Haircut", large: false },
  { src: "https://media.istockphoto.com/id/856184464/photo/a-little-boy-is-trimmed-in-the-hairdressers.jpg?s=612x612&w=0&k=20&c=SX4hTFXKr9pR--JOA3buT6wRz409TJ0to1AV-y7cI0M=", title: "Textured Crop", cat: "Men's Cut", large: false },
  { src: "https://s3-media0.fl.yelpcdn.com/bphoto/HSweIW5mkdPyaYIxJrxyZw/348s.jpg", title: "Bridal Elegance", cat: "Updo", large: false },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpKyPgPGmvoBu7Gnxme8-KRFGteqB4dKhVQ&s", title: "Platinum Glow", cat: "Color", large: false },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <span className="section-label">Our Portfolio</span>
          <h2 className="section-title">Style Gallery</h2>
          <div className="gold-line center"></div>
          <p className="section-subtitle">A glimpse into the artistry we create every day.</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.title} />
              <div className="gallery-overlay">
                <div><h4>{img.title}</h4><p>{img.cat}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}