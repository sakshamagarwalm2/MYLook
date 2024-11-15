import { IconCloud } from "./Icon-Cloud";

const slugs = [
  "typescript",
  "javascript",
  "scipy",
  "pytorch",
  "framer",
  "tensorflow",
  "keras",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "vercel",
  "python",
  "qiskit",
  "numpy",
  "pandas",
  "scikitlearn",
  "threedotjs",
  "flask",
  "streamlit",
  "opencv",
  "fastapi",
  "mysql",
  "mongodb",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
