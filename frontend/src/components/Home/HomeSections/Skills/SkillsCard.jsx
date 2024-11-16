import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShineBorder } from "./ShineBorder";

// Progress Bar Component
const ProgressBar = ({ progress, color }) => (
  <div className="w-full h-1 bg-stone-300/10 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full rounded-full"
      style={{ backgroundColor: color }}
    />
  </div>
);

// Skill Item Component
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
  // Sample data
  const skillsData = [
    {
      id: "aiml",
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", progress: 75, color: "#FF6F00" },
        { name: "PyTorch", progress: 70, color: "#EE4C2C" },
        { name: "Scikit-learn", progress: 85, color: "#F7931E" },
        { name: "Scikit-learn", progress: 85, color: "#F7931E" },
      ],
    },
    {
        id: "webdev",
        title: "Web Dev.",
        skills: [
          { name: "React", progress: 90, color: "#61DAFB" },
          { name: "Node.js", progress: 85, color: "#68A063" },
          { name: "TypeScript", progress: 80, color: "#3178C6" },
          { name: "Javascript", progress: 80, color: "#3178C6" },
          { name: "Next", progress: 80, color: "#3178C6" },
          { name: "three", progress: 80, color: "#3178C6" },
          { name: "TypeScript", progress: 80, color: "#3178C6" },
        ],
      }, 
    {
      id: "quantum",
      title: "Quantum Computing",
      skills: [
        { name: "Qiskit", progress: 60, color: "#6929C4" },
        { name: "Quantum Circuits", progress: 55, color: "#1192E8" },
        { name: "Cirq", progress: 45, color: "#FF7A59" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

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




// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ShineBorder } from "./ShineBorder";

// // Progress Bar Component
// const ProgressBar = ({ progress, color }) => (
//   <div className="w-full h-1 bg-stone-300/10 rounded-full overflow-hidden">
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: `${progress}%` }}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className="h-full rounded-full"
//       style={{ backgroundColor: color }}
//     />
//   </div>
// );

// // Skill Item Component
// const SkillItem = ({ name, progress, color }) => (
//   <div className="mb-4">
//     <div className="flex justify-between mb-1">
//       <span className="text-sm font-medium text-stone-300">
//         {name}
//       </span>
//       <span className="text-sm font-medium text-stone-300">
//         {progress}%
//       </span>
//     </div>
//     <ProgressBar progress={progress} color={color} />
//   </div>
// );

// // Main Skills Card Component
// const SkillsCard = () => {
//   const [skillsData, setSkillsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeCategory, setActiveCategory] = useState(null);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       try {
//         // Replace with your API endpoint
//         const response = await fetch('/api/skills');
//         if (!response.ok) {
//           throw new Error('Failed to fetch skills data');
//         }
//         const data = await response.json();
//         setSkillsData(data);
//         // Set initial active category
//         if (data.length > 0) {
//           setActiveCategory(data[0].id);
//         }
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center p-8">
//         <div className="animate-pulse text-white">Loading skills...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center p-8">
//         <div className="text-red-500">Error: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center p-8">
//       {/* Category Navigation */}
//       <div className="flex gap-4 mb-8">
//         {skillsData.map((category) => (
//           <button
//             key={category.id}
//             onClick={() => setActiveCategory(category.id)}
//             className="inline-flex h-auto p-1 flex-wrap animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:text-slate-100"
//           >
//             {category.title}
//           </button>
//         ))}
//       </div>

//       {/* Skills Display */}
//       <div className="w-full max-w-md">
//         <AnimatePresence mode="wait">
//           {skillsData.map((category) =>
//             category.id === activeCategory ? (
//               <ShineBorder
//                 key={category.id}
//                 className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
//                 color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
//               >
//                 <motion.div
//                   key={category.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   className="p-6 w-full"
//                 >
//                   <div className="flex items-center mb-6">
//                     <span className="text-2xl font-bold text-white">
//                       {category.title}
//                     </span>
//                   </div>
//                   <div className="space-y-4">
//                     {category.skills.map((skill) => (
//                       <SkillItem
//                         key={skill.name}
//                         name={skill.name}
//                         progress={skill.progress}
//                         color={skill.color}
//                       />
//                     ))}
//                   </div>
//                 </motion.div>
//               </ShineBorder>
//             ) : null
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default SkillsCard;