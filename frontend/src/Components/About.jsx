import profile from "../assets/profile.jpeg"

function About() {
  return (
    <section id="about" className="w-full py-16 px-6 bg-gray-100">
      
      <div className="w-full flex flex-col items-center text-center">

        <img
          src={profile}
          alt="Garv profile photo"
          className="block w-40 h-40 rounded-full object-cover mb-6"
        />

        <h2 className="text-4xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-lg leading-relaxed max-w-2xl">
          My name is Garv. I am a student at Chitkara University
          pursuing B.E. in Artificial Intelligence and Machine Learning.
          I enjoy playing sports and spending time with friends and
          loved ones.
        </p>

      </div>

    </section>
  )
}

export default About