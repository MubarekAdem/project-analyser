"use client";

import { useState } from "react";

export default function ProjectForm({ onSubmit }) {
  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
    teamMembers: "",
    techStack: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(projectData).finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-50 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]">
      <form
        className="w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold mb-8 text-black border-b-2 border-black pb-2">
          Project Details
        </h2>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={projectData.name}
              onChange={handleChange}
              className="peer w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 ease-in-out bg-transparent"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute left-4 -top-3 text-sm text-gray-600 transition-all duration-300 ease-in-out bg-white px-1
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm sm:peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-2"
            >
              Project Name
            </label>
          </div>

          <div className="relative">
            <textarea
              name="description"
              id="description"
              value={projectData.description}
              onChange={handleChange}
              className="peer w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 ease-in-out min-h-[120px] resize-y bg-transparent"
              placeholder=" "
              required
            />
            <label
              htmlFor="description"
              className="absolute left-4 -top-3 text-sm text-gray-600 transition-all duration-300 ease-in-out bg-white px-1
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm sm:peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-2"
            >
              Description
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              name="teamMembers"
              id="teamMembers"
              value={projectData.teamMembers}
              onChange={handleChange}
              className="peer w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 ease-in-out bg-transparent"
              placeholder=" "
            />
            <label
              htmlFor="teamMembers"
              className="absolute left-4 -top-3 text-sm text-gray-600 transition-all duration-300 ease-in-out bg-white px-1
               peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
            >
              Team Members
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Example: person 1 - Frontend, person 2 - Backend
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              name="techStack"
              id="techStack"
              value={projectData.techStack}
              onChange={handleChange}
              className="peer w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 ease-in-out bg-transparent"
              placeholder=" "
            />
            <label
              htmlFor="techStack"
              className="absolute left-4 -top-3 text-sm sm:text-xs md:text-sm text-gray-600 transition-all duration-300 ease-in-out bg-white px-1
               peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-xs"
            >
              Tech Stack
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2 w-5 h-5 border-4 border-t-transparent border-white rounded-full"></span>
              Analysing...
            </>
          ) : (
            "Submit Project"
          )}
        </button>
      </form>
    </div>
  );
}
