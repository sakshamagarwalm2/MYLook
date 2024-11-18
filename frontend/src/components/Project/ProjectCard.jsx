import React, { useState, useEffect } from "react";
import { PinContainer } from "./3d-pin";
import { databases, DATABASE_ID, PROJECT_COLLECTION_ID } from '../../config.js';

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        PROJECT_COLLECTION_ID
      );

      const fetchedProjects = response.documents.map(project => ({
        id: project.$id,
        title: project.title,
        description: project.description,
        projectLink: project.projectLink,
        imageUrl: project.imageUrl
      }));

      setProjects(fetchedProjects);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-white text-center">Loading projects...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error}</div>;

  return (
    <div className="h-full w-full flex items-center justify-center flex-row flex-wrap mt-10 gap-5">
      {projects.map((project) => (
        <PinContainer
          key={project.id}
          title={project.title}
          href={project.projectLink}
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {project.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                {project.description}
              </span>
            </div>
            <a 
              href={project.projectLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:underline"
            >
              View Project
            </a>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            {project.imageUrl && (
              // <h1>{project.imageUrl}</h1>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full object-cover rounded-t-lg"
              />
            )}
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
};

export default ProjectCard;