import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
}

const ConstellationLoader: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(
      Array.from(
        { length: 200 },
        (): Star => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 1,
        })
      )
    );
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden rounded-xl flex items-center justify-center">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary dark:bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <motion.div
        className="absolute h-1 w-1 rounded-full bg-transparent"
        animate={{
          x: stars.map((star) => `${star.x}%`),
          y: stars.map((star) => `${star.y}%`),
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 10,
          times: stars.map((_, i) => i / (stars.length - 1)),
          repeat: Infinity,
        }}
      />

      <span className="text-primary dark:text-white text-2xl py-4 px-6 bg-white dark:bg-primary rounded-full z-10 border-2">
        <span className="animate-pulse">Loading...</span>
      </span>
    </div>
  );
};

export default ConstellationLoader;
