import ProjectCard from "./ProjectCard"

import bmi from "../assets/bmi.png"
import student from "../assets/student.png"

function Work() {
  const projects = [
    {
      image: bmi,
      title: "BMI Calculator",
      description:
        "A simple web-based BMI calculator built using HTML and Tailwind CSS. It calculates BMI based on the user's height and weight.",
      link: "https://github.com/GarvSood/BMI-CALCULATOR"
    },
    {
      image: student,
      title: "Student Registration Form",
      description:
        "A Student Registration Form used to keep record of every student enrolled in the particular unit or subject.",
      link: "https://github.com/GarvSood/Html-work/blob/main/Attendance%20work/registration.html"
    }
  ]

  return (
    <section id="work" className="py-16 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-10">
        My Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Work