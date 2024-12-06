import axios from "axios";
import { useEffect, useState } from "react";
import ArrowIcon from "../assets/icons/ArrowIcon";

interface Projects {
  id: number;
  name: string;
  technologies: string[];
  link: string;
  image: string;
}

function Projects() {
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_APP_API_KEY;
        const response = await axios.get<Projects[]>(apiUrl);
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div id="projects" className="bg-Main text-center p-container">
      <h1 className="text-White text-h1">Projects</h1>
      <p className="text-White text-p pb-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
        {projects.map((project) => (
          <div key={project.id}>
            <div className="group relative">
              <img
                className="duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-50 rounded-xl"
                src={project.image}
                alt={`image for ${project.name}`}
              />

              <div className="absolute bg-Dark inset-0 flex flex-col items-center justify-center opacity-90 lg:opacity-0 group-hover:opacity-90 transition-all duration-500 ease-in-out rounded-xl">
                <h2 className="sm:text-2xl md:text-3xl lg:text-h2 text-White">
                  {project.name}
                </h2>

                <h4 className="text-White text-center sm:text-sm md:text-base lg:text-h4">
                  {project.technologies.join(", ")}
                </h4>
                <a
                  className="sm:text-sm md:text-base border rounded-full mt-5 text-White flex flex-row items-center p-2 px-4"
                  href={project.link}
                  target="_blank"
                >
                  <span className="mr-2">View Project</span>

                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;