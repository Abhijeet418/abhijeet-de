"use client";

import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Education
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white"></div>
        </div>

        <div className="bg-white dark:bg-black p-8 rounded border-l-4 border-black dark:border-white max-w-2xl">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
            {education.degree}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold mb-2">
            {education.school}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {education.location}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-black dark:text-white">
              GPA: {education.gpa}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
