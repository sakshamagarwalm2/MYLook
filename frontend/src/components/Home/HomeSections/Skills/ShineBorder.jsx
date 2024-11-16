import { cn } from "../../../../lib/utils";

/**
 * @name Shine Border with Glassmorphism
 * @description An animated border component with glassmorphism effect and configurable props.
 * @param borderRadius defines the radius of the border
 * @param borderWidth defines the width of the border
 * @param duration defines the animation duration for the shining border
 * @param color a string or string array to define border color
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements
 * @param blur optional blur amount for glassmorphism effect (default: 8)
 * @param opacity optional background opacity for glassmorphism (default: 0.1)
 */
export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
  // Added new props for glassmorphism customization
  blur = 8,
  opacity = 0.1,
}) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
        // Added glassmorphism styles as CSS variables
        "--blur-amount": `${blur}px`,
        "--bg-opacity": opacity,
      }}
      className={cn(
        // Changed background styles to create glassmorphism effect
        "relative grid  w-fit place-items-center rounded-[--border-radius]",
        // Added backdrop blur and background with opacity
        "backdrop-blur-[--blur-amount]",
        // Added subtle gradient background with transparency
        "bg-gradient-to-br from-white/[--bg-opacity] to-transparent",
        // Added subtle shadow for depth
        "shadow-lg",
        // Added border effect
        "border border-white/20",
        // Text color now adapts to light/dark mode while maintaining readability
        "text-gray-800 dark:text-gray-100",
        className
      )}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            Array.isArray(color) ? color.join(",") : color
          },transparent,transparent)`,
        }}
        className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
      ></div>
      {children}
    </div>
  );
}