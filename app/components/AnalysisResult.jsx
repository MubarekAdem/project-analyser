"use client";

import React, { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import { motion } from "framer-motion";

const AnalysisResult = ({ analysis }) => {
  const [sections, setSections] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!analysis) return; // Add a check for undefined or null analysis

    const analysisString =
      typeof analysis === "object" ? analysis.analysis : analysis;

    if (!analysisString) return; // Add another check for empty analysis string

    const html = marked(analysisString);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const newSections = [];
    tempDiv.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node;
        if (
          element.tagName === "H1" ||
          element.tagName === "H2" ||
          element.tagName === "H3"
        ) {
          newSections.push({ type: "header", content: element.outerHTML });
        } else if (element.tagName === "P") {
          newSections.push({ type: "paragraph", content: element.outerHTML });
        } else if (element.tagName === "UL" || element.tagName === "OL") {
          newSections.push({ type: "list", content: element.outerHTML });
        }
      }
    });

    setSections(newSections);
  }, [analysis]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const listVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  if (!analysis) {
    return <p>No analysis data available.</p>; // Optionally render a message if analysis is not available
  }

  return (
    <div
      ref={containerRef}
      className="p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`animate-on-scroll ${
            section.type === "header"
              ? "text-2xl font-bold text-gray-800"
              : section.type === "paragraph"
              ? "text-gray-700"
              : "text-gray-600"
          }`}
          initial="hidden"
          animate="visible"
          variants={
            section.type === "header"
              ? headerVariants
              : section.type === "paragraph"
              ? paragraphVariants
              : listVariants
          }
        >
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </motion.div>
      ))}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default AnalysisResult;
