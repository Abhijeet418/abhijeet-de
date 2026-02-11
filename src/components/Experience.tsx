"use client";

import { workExperience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white"></div>
        </div>

        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded border-l-4 border-black dark:border-white"
            >
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                  {job.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                  {job.company}
                </p>
                <time className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {job.duration}
                </time>
              </div>

              <ul className="space-y-3">
                {job.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-4 leading-relaxed"
                  >
                    <span className="text-black dark:text-white font-bold shrink-0 mt-1">
                      ◆
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
