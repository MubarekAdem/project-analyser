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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
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
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
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
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
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
              Team Members (e.g., Alice - Frontend, Bob - Backend)
            </label>
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
              className="absolute left-4 -top-3 text-sm text-gray-600 transition-all duration-300 ease-in-out bg-white px-1
                         peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
            >
              Tech Stack (e.g., React, Node.js, MongoDB)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}
