import TutorialCard from "./TutorialCard";

import codingWorkspace from "../assets/coding workspace.jpg";
import javaCode from "../assets/java code on laptop.jpeg";
import reactScreen from "../assets/react on screen.jpeg";

function FeaturedTutorials() {
  const tutorials = [
    {
      image: codingWorkspace,
      title: "Building Your First React Component",
      description:
        "Learn how to create reusable components and structure a React application.",
      category: "React",
      rating: 5,
      author: "Garv",
    },
    {
      image: javaCode,
      title: "Working with React Props",
      description:
        "Understand how information can be passed from parent components to child components.",
      category: "React",
      rating: 4.9,
      author: "Garv",
    },
    {
      image: reactScreen,
      title: "Creating Responsive Websites",
      description:
        "Learn how responsive layouts can make your website work across different screen sizes.",
      category: "Web Design",
      rating: 5,
      author: "Garv",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:text-4xl lg:mb-10">
          Featured Tutorials
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <TutorialCard
              key={tutorial.title}
              image={tutorial.image}
              title={tutorial.title}
              description={tutorial.description}
              category={tutorial.category}
              rating={tutorial.rating}
              author={tutorial.author}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            See all tutorials
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTutorials;