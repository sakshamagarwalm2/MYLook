import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors || [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // Adjust height for 50% of container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.2;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${containerClassName}`}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>
    </div>
  );
};

export default WavyBackground;
