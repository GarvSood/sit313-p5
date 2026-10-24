function ProjectCard({ image, title, description, link }) {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="mb-4">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard