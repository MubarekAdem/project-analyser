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
    <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
      {" "}
      <h2 className="text-xl font-bold mb-4">Project Details</h2>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700 font-bold mb-2">
          {" "}
          Project Name{" "}
        </label>{" "}
        <input
          type="text"
          name="name"
          value={projectData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700 font-bold mb-2">
          {" "}
          Description{" "}
        </label>{" "}
        <textarea
          name="description"
          value={projectData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700 font-bold mb-2">
          {" "}
          Team Members{" "}
        </label>{" "}
        <input
          type="text"
          name="teamMembers"
          value={projectData.teamMembers}
          onChange={handleChange}
          placeholder="e.g., Alice - Frontend, Bob - Backend"
          className="w-full px-4 py-2 border rounded"
        />{" "}
      </div>{" "}
      <div className="mb-4">
        {" "}
        <label className="block text-gray-700 font-bold mb-2">
          Tech Stack
        </label>{" "}
        <input
          type="text"
          name="techStack"
          value={projectData.techStack}
          onChange={handleChange}
          placeholder="e.g., React, Node.js, MongoDB"
          className="w-full px-4 py-2 border rounded"
        />{" "}
      </div>{" "}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {" "}
        Submit{" "}
      </button>{" "}
    </form>
  );
}
