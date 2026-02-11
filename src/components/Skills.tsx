"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  const skillCategories = [
    { title: "Programming Languages", skills: skills.programming },
    { title: "Databases & Data Warehouses", skills: skills.database },
    { title: "Cloud & Infrastructure", skills: skills.cloud },
    { title: "Tools & Platforms", skills: skills.tools },
    { title: "Frameworks & Libraries", skills: skills.frameworks },
    { title: "Soft Skills", skills: skills.softSkills },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
