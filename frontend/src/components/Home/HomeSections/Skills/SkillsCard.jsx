import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShineBorder } from "./ShineBorder";
import { databases, DATABASE_ID, SKILLS_COLLECTION_ID } from '../../../../config.js';

// Progress Bar Component (same as before)
const ProgressBar = ({ progress, color }) => (
  <div className="w-full h-1 bg-stone-300/10 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full rounded-full"
      style={{ backgroundColor: `${color}` }}
    />
  </div>
);

// Skill Item Component (same as before)
const SkillItem = ({ name, progress, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-stone-300">
        {name}
      </span>
      <span className="text-sm font-medium text-stone-300">
        {progress}%
      </span>
    </div>
    <ProgressBar progress={progress} color={color} />
  </div>
);

// Main Skills Card Component
const SkillsCard = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID, 
        SKILLS_COLLECTION_ID
      );

      // Group skills by category
      const groupedSkills = response.documents.reduce((acc, skill) => {
        const category = skill.category;
        if (!acc.find(cat => cat.id === category)) {
          acc.push({
            id: category,
            title: category,
            skills: []
          });
        }

        const categoryIndex = acc.findIndex(cat => cat.id === category);
        acc[categoryIndex].skills.push({
          name: skill.name,
          progress: skill.progress,
          color: skill.color
        });

        return acc;
      }, []);

      setSkillsData(groupedSkills);
      
      // Set first category as active by default
      if (groupedSkills.length > 0) {
        setActiveCategory(groupedSkills[0].id);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading skills...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading skills: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Category Navigation */}
      <div className="flex gap-4 mb-8">
        {skillsData.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className="inline-flex h-auto p-1 flex-wrap animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:text-slate-100"
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {skillsData.map((category) =>
            category.id === activeCategory ? (
              <ShineBorder
                key={category.id}
                className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
              >
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-6 w-full"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-white">
                      {category.title}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillItem
                        key={skill.name}
                        name={skill.name}
                        progress={skill.progress}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </motion.div>
              </ShineBorder>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillsCard;