"use client";

import { FaGithub } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-6">About Projectify</h1>
        <p className="text-xl mb-6">
          Projectify is an AI-powered platform designed to streamline project
          analysis, generate innovative ideas, and assist you in managing your
          projects effectively. By leveraging cutting-edge AI technologies,
          Projectify helps you save time, improve productivity, and achieve your
          goals seamlessly.
        </p>
        <p className="text-lg">
          Built with a focus on user experience and innovation, Projectify is
          your ultimate project companion.
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://github.com/MubarekAdem/project-analyser"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-white"
        >
          <FaGithub className="text-3xl" />
          <span className="text-xl">View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
