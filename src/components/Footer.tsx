"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abhijeet Chatterjee</h3>
            <p className="text-gray-300 dark:text-gray-600">
              Data Engineer | Cloud Architect | Building scalable systems
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-600">
              <li>
                <a href="#projects" className="hover:text-white dark:hover:text-black transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white dark:hover:text-black transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white dark:hover:text-black transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Abhijeet418"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:pyabhijeet@gmail.com"
                className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/abhijeet-chatterjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-300 pt-8">
          <p className="text-center text-gray-400 dark:text-gray-500">
            © 2026 Abhijeet Chatterjee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
