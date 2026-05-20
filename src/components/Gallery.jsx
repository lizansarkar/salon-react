const images = [
  {
    src: "https://img.freepik.com/free-psd/barbershop-social-media-square-flyer-instagram-haircut-post-banner-template_505751-7328.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Balayage Perfection",
    cat: "Coloring",
    large: true,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvANgzPqJvsJag6RhkAmYNftqNAVb4FxnlKg&s",
    title: "Classic Bob",
    cat: "Haircut",
    large: false,
  },
  {
    src: "https://media.istockphoto.com/id/856184464/photo/a-little-boy-is-trimmed-in-the-hairdressers.jpg?s=612x612&w=0&k=20&c=SX4hTFXKr9pR--JOA3buT6wRz409TJ0to1AV-y7cI0M=",
    title: "Textured Crop",
    cat: "Men's Cut",
    large: false,
  },
  {
    src: "https://s3-media0.fl.yelpcdn.com/bphoto/HSweIW5mkdPyaYIxJrxyZw/348s.jpg",
    title: "Bridal Elegance",
    cat: "Updo",
    large: false,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpKyPgPGmvoBu7Gnxme8-KRFGteqB4dKhVQ&s",
    title: "Platinum Glow",
    cat: "Color",
    large: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.35em] text-[#c9a84c]">
            Our Portfolio
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950">
            Style Gallery
          </h2>
          <div className="gold-line mx-auto mt-6"></div>
          <p className="mt-6 text-base leading-8 text-slate-600">
            A glimpse into the artistry we create every day.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-[2rem] bg-slate-950/5 transition duration-500 ${img.large ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>
              <div className="absolute bottom-6 left-6 right-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <h4 className="text-xl font-semibold text-white">
                  {img.title}
                </h4>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-[#c9a84c]">
                  {img.cat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
