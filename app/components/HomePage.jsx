"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/ai");
  };

  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Projectify</h1>
        <p className="text-xl mb-6">
          AI-driven Project analyser,Idea generator and Helper
        </p>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
