import React from "react";
import AboutBg from "../../assets/AboutBg.jpg";

import profilepic from "../../assets/Author.jpg";

function AboutCard() {
  return (
    <div
      className="h-auto overflow-hidden w-full flex justify-center items-center bg-cover"
      style={{ backgroundImage: `url(${AboutBg})` }}
    >
      <div className="container mx-auto px-4 py-8 z-10 flex flex-col gap-8 items-center justify-center">
        {/* Left part with header and paragraph */}
        <div className="w-full md:w-2/3 bg-white/10 backdrop-blur-md p-8 rounded-xl text-white">
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-1">Saksham Agarwal_</h2>
              <p className="text-lg mb-3">
                MERN Stack Developer | AI/ML & GenAI developer
              </p>
            </div>
            <img
              src={profilepic}
              alt="Profile"
              className="w-28 h-28 mb-2 ml-5 md:mr-14 rounded-full object-cover border-4 border-slate-300"
            />
          </div>
          <p>
            Innovative software developer seeking internship in AI, machine
            learning, and web development. Passionate about emerging
            technologies, particularly quantum computing, with a drive to learn
            and contribute to cutting-edge tech solutions.
          </p>
        </div>

        <div className="flex justify-center items-center pb-5">
          <a
            href="/about"
            className="inline-flex h-auto p-4 w-[20rem] uppercase text-xl flex-wrap animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100"
          >
            Author's journey
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
