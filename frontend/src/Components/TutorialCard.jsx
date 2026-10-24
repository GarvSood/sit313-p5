function TutorialCard({ image, title, description, category, rating, author }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <p className="text-sm text-blue-600 font-semibold mb-2">
          {category}
        </p>

        <p className="text-sm mb-1">
           {rating}
        </p>

        <p className="text-sm text-gray-500">
          By {author}
        </p>
      </div>
    </article>
  )
}

export default TutorialCard