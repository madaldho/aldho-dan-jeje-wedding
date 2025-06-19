
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloralElements = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6
      }));
      setPetals(newPetals);
    };

    generatePetals();
    const interval = setInterval(generatePetals, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Enhanced Falling Petals */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute opacity-60"
            style={{
              left: `${petal.left}%`,
              top: '-20px',
            }}
            initial={{ y: -20, rotate: 0, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 20, 
              rotate: 360,
              opacity: [0, 0.6, 0.6, 0],
              x: [0, Math.sin(petal.id) * 50, Math.cos(petal.id) * 30]
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: "linear",
              repeat: Infinity
            }}
          >
            <div
              className="w-3 h-3 md:w-4 md:h-4"
              style={{
                background: 'linear-gradient(45deg, #fda4af, #f9a8d4, #fdba74)',
                borderRadius: '50% 0 50% 50%',
                transform: 'rotate(45deg)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* 3D Floating Flowers */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 180],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <div 
              className="w-8 h-8 md:w-12 md:h-12 rounded-full opacity-20"
              style={{
                background: `linear-gradient(${45 + i * 30}deg, #fda4af, #f9a8d4, #fdba74)`,
                borderRadius: '50% 30% 50% 30%',
                filter: 'blur(1px)'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Corner Decorative Flowers with 3D effect */}
      <motion.div 
        className="fixed top-0 left-0 w-24 h-24 md:w-32 md:h-32 opacity-20 pointer-events-none"
        animate={{
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-300 rounded-full" 
          style={{ borderRadius: '50% 30% 50% 30%' }} 
        />
      </motion.div>
      
      <motion.div 
        className="fixed top-0 right-0 w-20 h-20 md:w-24 md:h-24 opacity-20 pointer-events-none"
        animate={{
          rotateY: [360, 180, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-bl from-amber-300 to-orange-300 rounded-full" 
          style={{ borderRadius: '30% 50% 30% 50%' }} 
        />
      </motion.div>

      <motion.div 
        className="fixed bottom-0 left-0 w-24 h-24 md:w-28 md:h-28 opacity-20 pointer-events-none"
        animate={{
          rotateX: [0, 180, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full" 
          style={{ borderRadius: '50% 30% 50% 30%' }} 
        />
      </motion.div>

      <motion.div 
        className="fixed bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 opacity-20 pointer-events-none"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <div 
          className="w-full h-full bg-gradient-to-tl from-orange-300 to-amber-300 rounded-full" 
          style={{ borderRadius: '30% 50% 30% 50%' }} 
        />
      </motion.div>
    </>
  );
};

export default FloralElements;
