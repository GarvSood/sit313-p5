import eevee from "../assets/eevee.jpeg"
import pool from "../assets/pool.jpeg"
import car from "../assets/car.jpeg"
import batman from "../assets/batman.jpeg"

function Gallery() {
  const images = [
    {
      src: eevee,
      alt: "Eevee"
    },
    {
      src: pool,
      alt: "Pool"
    },
    {
      src: car,
      alt: "Car"
    },
    {
      src: batman,
      alt: "Batman"
    }
  ]

  return (
    <section id="gallery" className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((image) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery