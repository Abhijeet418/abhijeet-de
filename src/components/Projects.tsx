"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import { Github, Image as ImageIcon, ExternalLink } from "lucide-react";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  const [galleryOpen, setGalleryOpen] = useState<{
    open: boolean;
    projectIndex: number;
  }>({ open: false, projectIndex: 0 });

  const openGallery = (index: number) => {
    setGalleryOpen({ open: true, projectIndex: index });
  };

  const closeGallery = () => {
    setGalleryOpen({ open: false, projectIndex: 0 });
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-4 border-black dark:border-white pl-8 py-12 hover:pl-10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {project.subtitle}
                  </p>
                  <time className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {project.duration}
                  </time>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded hover:opacity-80 transition-opacity"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  {project.screenshots && project.screenshots.length > 0 && (
                    <button
                      onClick={() => openGallery(index)}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white text-black dark:text-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <ImageIcon size={18} />
                      <span>Gallery</span>
                    </button>
                  )}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-black dark:text-white mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                    >
                      <span className="text-black dark:text-white font-bold mt-1">
                        •
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectGallery
        isOpen={galleryOpen.open}
        images={
          galleryOpen.open ? projects[galleryOpen.projectIndex].screenshots || [] : []
        }
        projectTitle={
          galleryOpen.open ? projects[galleryOpen.projectIndex].title : ""
        }
        onClose={closeGallery}
      />
    </section>
  );
}
