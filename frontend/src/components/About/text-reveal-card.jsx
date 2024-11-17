/** @jsxImportSource react */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "border bg-stone-800 w-full rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}
      <div className="h-full relative flex items-center overflow-hidden">
        <motion.div
          style={{
            width: "100%"
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute bg-stone-800 z-20 will-change-transform"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)"
            }}
            className=" text-lg py-10 font-bold text-white bg-clip-text bg-gradient-to-b from-white to-neutral-300"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 1 }}
          className="h-auto w-auto bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        />

        <div className="[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-lg py-10 font-medium bg-clip-text  bg-[#323238]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className
}) => {
  return (
    <h2 className={twMerge("text-white text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-sm", className)}>
      {children}
    </p>
  );
};
