import banner from "../assets/banner.jpg"

function Hero() {
  return (
    <header className="relative group w-full h-96 overflow-hidden">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-center text-4xl font-bold p-6 opacity-0 group-hover:opacity-100 transition">
        Hey, I'm Garv
      </div>
    </header>
  )
}

export default Hero