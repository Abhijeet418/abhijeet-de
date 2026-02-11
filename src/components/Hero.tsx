"use client";

import { Github, Mail, Phone, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl w-full py-20">
        {/* Header with Image */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Abhijeet
              <br />
              Chatterjee
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8">
              Data Engineer | Cloud Architect | Python Developer
            </p>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8 text-gray-700 dark:text-gray-400">
              <a
                href="mailto:pyabhijeet@gmail.com"
                className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>pyabhijeet@gmail.com</span>
              </a>
              <a
                href="tel:+918447322461"
                className="flex items-center gap-2 hover:text-black dark:hover:text-white transition-colors"
              >
                <Phone size={20} />
                <span>+91 8447 322 461</span>
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden border-2 border-black dark:border-white shadow-lg">
              <Image
                src="/images/headshot.jpeg"
                alt="Abhijeet Chatterjee"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-12 h-1 bg-black dark:bg-white mb-12"></div>

        {/* About */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Passionate Data Engineer with expertise in designing and implementing
            scalable data pipelines on AWS. Specialized in Kubernetes
            orchestration, distributed ETL workflows, and real-time analytics
            systems. Experienced in transforming raw data into actionable
            business insights through modern cloud infrastructure and data
            architecture.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded font-bold hover:opacity-80 transition-opacity text-center"
          >
            View My Work
          </a>
          <a
            href="https://github.com/Abhijeet418"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-center flex items-center justify-center gap-2"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="/images/resume.pdf"
            download
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors text-center flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
