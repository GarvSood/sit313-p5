import ArticleCard from "./ArticleCard"

import bmi from "../assets/bmi.png"
import student from "../assets/student.png"
import banner from "../assets/banner.jpg"

function FeaturedArticles() {
  const articles = [
    {
      image: bmi, 
      title: "Getting Started with Web Development",
      description:
        "An introduction to building simple and useful websites using modern web development techniques.",
      category: "Web Development",
      rating: 5,
      author: "Garv"
    },
    {
      image: student,
      title: "Understanding JavaScript Basics",
      description:
        "Learn the basic concepts of JavaScript and how it can be used to create interactive web pages.",
      category: "JavaScript",
      rating: 4.8,
      author: "Garv"
    },
    {
      image: banner,
      title: "Introduction to React",
      description:
        "A beginner-friendly introduction to React components, props and building user interfaces.",
      category: "React",
      rating: 5,
      author: "Garv"
    }
  ]

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">
        Featured Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            description={article.description}
            category={article.category}
            rating={article.rating}
            author={article.author}
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          See all articles
        </button>
      </div>
    </section>
  )
}

export default FeaturedArticles