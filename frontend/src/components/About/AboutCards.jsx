import React from 'react';
import { Download, ExternalLink, Award, Cpu } from 'lucide-react';
import { ShineBorder } from '../Home/HomeSections/Skills/ShineBorder';

const AboutCards = () => {
  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'AI/ML'];
  
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '20+', label: 'Open Source' },
    { value: '1000+', label: 'Contributions' },
  ];

  const certifications = [
    'Best AI Innovation Award 2023',
    'Google Cloud Certified',
    'AWS Solutions Architect',
  ];

  return (
    <div className="h-full w-full text-white p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Profile Section */}
        <div className="space-y-6">
          {/* Profile Card */}
          <ShineBorder className="bg-zinc-900/50 border-none">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-zinc-700 border-4 border-zinc-600" />
              <h1 className="text-3xl font-bold mb-2">John Doe</h1>
              <p className="text-gray-300 mb-4">Full Stack Developer & AI Engineer</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6">
                Passionate about crafting cutting-edge web applications and exploring the frontiers of AI technology.
              </p>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download Resume
                </button>
                <button className="w-full py-2 px-4 bg-zinc-700 hover:bg-zinc-600 rounded flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" /> Explore Gyana AI
                </button>
              </div>
            </div>
          </ShineBorder>

          {/* Awards & Certifications */}
          <ShineBorder className="bg-zinc-900/50 border-none">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Awards & Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-zinc-400" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </ShineBorder>

          {/* Stats Card */}
          <ShineBorder className="bg-zinc-900/50 border-none">
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
          <ShineBorder className="bg-zinc-900/50 border-none">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Featured Project</h2>
                <span className="text-sm text-gray-400">Latest Work</span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2">Gyana - Advanced AI Language Model</h3>
                <p className="text-gray-300 mb-4">
                  A state-of-the-art language model designed for advanced natural language processing and generation. 
                  Built with cutting-edge AI technology and optimized for real-world applications.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Machine Learning', 'Natural Language Processing', 'Python', 'TensorFlow'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="py-2 px-4 bg-zinc-700 hover:bg-zinc-600 rounded inline-flex items-center gap-2">
                  Learn More About Gyana <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              
              <div className="aspect-video bg-zinc-800/50 rounded-lg" />
            </div>
          </ShineBorder>

          {/* Single Project Card */}
          <ShineBorder className="bg-zinc-900/50 border-none">
            <div className="p-6">
              <div className="mb-3 text-zinc-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">AI Analytics Platform</h3>
              <p className="text-gray-300 mb-4">
                Real-time data analysis using advanced AI algorithms. Our platform processes massive amounts of data 
                to provide actionable insights and predictive analytics for businesses.
              </p>
              <button className="text-zinc-400 hover:text-zinc-300 inline-flex items-center gap-1">
                Learn More <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </ShineBorder>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;