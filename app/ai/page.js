"use client";
import { useState } from "react";
import ProjectForm from "@/components/ProjectForm";
import AnalysisResult from "@/components/AnalysisResult";

export default function Home() {
  const [analysis, setAnalysis] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async (projectData) => {
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectDetails: projectData }),
      });

      const result = await response.json();
      setAnalysis(result);
      setShowForm(false);
    } catch (error) {
      console.error("Error fetching analysis:", error);
    }
  };

  const handleBack = () => {
    setShowForm(true);
    setAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {showForm ? (
          <ProjectForm onSubmit={handleFormSubmit} />
        ) : (
          <AnalysisResult analysis={analysis} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}
