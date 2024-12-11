"use client";
import { useAnalysis } from "../context/AnalysisContext";

export default function Analyze() {
  const { analysis } = useAnalysis();

  if (!analysis) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Analysis Result</h1>
        <h2 className="text-xl font-semibold">Roadmap:</h2>
        <p>{analysis.roadmap}</p>

        <h2 className="text-xl font-semibold">Estimated Time to Complete:</h2>
        <p>{analysis.timeEstimate}</p>

        <h2 className="text-xl font-semibold">Recommendations:</h2>
        <p>{analysis.recommendations}</p>
      </div>
    </div>
  );
}
