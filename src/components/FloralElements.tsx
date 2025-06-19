
import { useState, useEffect } from 'react';

const FloralElements = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const generatePetals = () => {
      const newPetals = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4
      }));
      setPetals(newPetals);
    };

    generatePetals();
    const interval = setInterval(generatePetals, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Falling Petals */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute w-4 h-4 opacity-60 animate-bounce"
            style={{
              left: `${petal.left}%`,
              top: '-20px',
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`,
              background: 'linear-gradient(45deg, #fda4af, #f9a8d4, #fdba74)',
              borderRadius: '50% 0 50% 50%',
              transform: 'rotate(45deg)',
              animation: `fall ${petal.duration}s ${petal.delay}s infinite linear`
            }}
          />
        ))}
      </div>

      {/* Corner Decorative Flowers */}
      <div className="fixed top-0 left-0 w-32 h-32 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-300 rounded-full animate-pulse" 
             style={{ borderRadius: '50% 30% 50% 30%' }} />
      </div>
      
      <div className="fixed top-0 right-0 w-24 h-24 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-amber-300 to-orange-300 rounded-full animate-pulse" 
             style={{ borderRadius: '30% 50% 30% 50%', animationDelay: '1s' }} />
      </div>

      <div className="fixed bottom-0 left-0 w-28 h-28 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full animate-pulse" 
             style={{ borderRadius: '50% 30% 50% 30%', animationDelay: '2s' }} />
      </div>

      <div className="fixed bottom-0 right-0 w-20 h-20 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tl from-orange-300 to-amber-300 rounded-full animate-pulse" 
             style={{ borderRadius: '30% 50% 30% 50%', animationDelay: '3s' }} />
      </div>
    </>
  );
};

export default FloralElements;
