import React from "react";
import { Download, Award, Cpu, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ShineBorder } from "../Home/HomeSections/Skills/ShineBorder";
import { HyperText } from "./Hypertext";
import profilepic from "../assets/logo.png";
import Quote from "../assets/Quoto.png";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

const AboutCards = () => {
  const technologies = ["Full-Stack", "MERN", "AI/ML", "DeepLearning"];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "20+", label: "Open Source" },
    { value: "1000+", label: "Contributions" },
  ];

  const certifications = [
    "Best AI Innovation Award 2023",
    "Google Cloud Certified", 
    "AWS Solutions Architect",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: <Github />,
      hoverColor: "hover:text-gray-800"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/yourusername",
      icon: <Linkedin/>,
      hoverColor: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername", 
      icon: <Twitter/>,
      hoverColor: "hover:text-sky-500"
    },
    {
      name: "Email",
      url: "mailto:youremail@example.com",
      icon: <Mail/>,
      hoverColor: "hover:text-red-500"
    }
  ];

  const handleDownloadResume = async () => {
    try {
      const response = await fetch('/api/resume'); // Your backend endpoint
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "Saksham_Agarwal_Resume.pdf"; // Name for downloaded file
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <div className="h-full w-full text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Profile Section */}
        <div className="space-y-6">
          {/* Profile Card */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-950/30 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <div className="p-6 text-center">
              <img
                src={profilepic}
                alt="Profile"
                className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-blue-900"
              />
              <HyperText
                className="text-xl md:text-4xl font-bold text-white orbitron"
                text="Saksham Agarwal"
              />
              <p className="text-gray-300 mb-4">
                Full Stack Developer & AI Engineer & Quantum Computing
                Enthusiast
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-zinc-800/20 rounded-full text-sm font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleDownloadResume}
                  className="inline-flex h-auto p-4 w-full uppercase text-lg animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100"
                >
                  <Download className="w-5 h-5 mr-5" /> Download Resume
                </button>
                <button className="inline-flex h-auto p-4 w-full uppercase text-lg animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100">
                  <Cpu className="w-5 h-5 mr-5" /> Explore Gyana AI
                </button>
              </div>
            </div>
          </ShineBorder>

          {/* Social Media Links */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-950/30 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <div className="p-6 w-full flex flex-col md:flex-row justify-evenly items-center">
              <h2 className="text-xl font-bold mb-4 md:mb-0 h-full">Connect With Me_</h2>
              <div className="flex justify-center items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full hover:bg-stone-300 transition-colors duration-200 ${link.hoverColor}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </ShineBorder>

          {/* Awards & Certifications */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-950/30 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">
                Awards & Certifications
              </h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-orange-300" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ShineBorder>

          {/* Stats Card */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-950/30 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ShineBorder>
        </div>

        {/* Right Column - Projects Section */}
        <div className="space-y-6">
          {/* Featured Project */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-950/30 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">About_</h2>
                <span className="text-sm text-gray-400">jai vishvnath</span>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Saksham agarwal</h3>
                <p className="text-gray-300 mb-4">
                  A state-of-the-art language model designed for advanced
                  natural language processing and generation. Built with
                  cutting-edge AI technology and optimized for real-world
                  applications.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Machine Learning",
                    "Nlp",
                    "scipy",
                    "pytorch",
                    "deep learning",
                    "tensorflow",
                    "keras",
                    "python",
                    "qiskit",
                    "cirq",
                    "typescript",
                    "javascript",
                    "framerMotion",
                    "numpy",
                    "pandas",
                    "scikitlearn",
                    "vectordb",
                    "flask",
                    "streamlit",
                    "opencv",
                    "react",
                    "nodejs",
                    "expressjs",
                    "nextjs",
                    "postgresql",
                    "firebase",
                    "docker",
                    "git",
                    "github",
                    "figma",
                    "threedjs",
                    "fastapi",
                    "mysql",
                    "mongodb",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 pt-1 bg-zinc-800 rounded-full text-sm font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={Quote}
                alt="Description"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </ShineBorder>

          {/* Single Project Card */}
          <ShineBorder
            className="relative flex w-auto h-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-stone-800 md:shadow-xl"
            color={["#6a329f", "#5b31c8", "#ff2a73", "#ff9a32", "#ff3232"]}
          >
            <TextRevealCard
              text="You know the business"
              revealText="I know the chemistry "
            >
              <TextRevealCardTitle>
                Sometimes, you just need to see it.
              </TextRevealCardTitle>
              <TextRevealCardDescription>
                This is a text reveal card. Hover over the card to reveal the
                hidden text.
              </TextRevealCardDescription>
            </TextRevealCard>
          </ShineBorder>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
