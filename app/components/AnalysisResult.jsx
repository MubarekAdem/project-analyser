import React from "react";
import { marked } from "marked"; // Import marked for Markdown parsing

const AnalysisResult = ({ analysis }) => {
  // Ensure analysis is a string, as it will be markdown
  let analysisString = analysis;

  // If analysis is an object, extract the string from it (i.e., from the "analysis" field)
  if (typeof analysis === "object" && analysis?.analysis) {
    analysisString = analysis.analysis; // Use the analysis field from the object
  }

  // Convert Markdown string to HTML using 'marked'
  const markdownToHTML = marked(analysisString);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div
        className="text-gray-700 mt-2"
        dangerouslySetInnerHTML={{ __html: markdownToHTML }}
      />
    </div>
  );
};

export default AnalysisResult;
