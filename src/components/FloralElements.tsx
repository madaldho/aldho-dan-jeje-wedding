
import { useState, useEffect } from 'react';

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
      <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute opacity-60 animate-bounce"
            style={{
              left: `${petal.left}%`,
              top: '-20px',
              animationDelay: `${petal.delay}s`,
              animationDuration: `${petal.duration}s`
            }}
          >
            <div
              className="w-3 h-3 md:w-4 md:h-4 animate-spin"
              style={{
                background: 'linear-gradient(45deg, #fda4af, #f9a8d4, #fdba74)',
                borderRadius: '50% 0 50% 50%',
                transform: 'rotate(45deg)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Decorative Corner Elements */}
      <div className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-5">
        <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-8 left-12 w-6 h-6 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-16 left-6 w-4 h-4 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none z-5">
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-bl from-pink-300/30 to-rose-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-8 right-12 w-6 h-6 bg-gradient-to-bl from-orange-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-16 right-6 w-4 h-4 bg-gradient-to-bl from-rose-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      <div className="fixed bottom-0 left-0 w-32 h-32 pointer-events-none z-5">
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-tr from-pink-300/30 to-rose-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-8 left-12 w-6 h-6 bg-gradient-to-tr from-orange-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3.5s' }} />
        <div className="absolute bottom-16 left-6 w-4 h-4 bg-gradient-to-tr from-rose-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="fixed bottom-0 right-0 w-32 h-32 pointer-events-none z-5">
        <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-tl from-pink-300/30 to-rose-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4.5s' }} />
        <div className="absolute bottom-8 right-12 w-6 h-6 bg-gradient-to-tl from-orange-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '5s' }} />
        <div className="absolute bottom-16 right-6 w-4 h-4 bg-gradient-to-tl from-rose-300/30 to-pink-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '5.5s' }} />
      </div>

      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 text-pink-300/40 animate-bounce" style={{ animationDelay: '6s', animationDuration: '3s' }}>
          ♥
        </div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 text-rose-300/40 animate-bounce" style={{ animationDelay: '7s', animationDuration: '4s' }}>
          ♥
        </div>
        <div className="absolute top-1/2 left-3/4 w-6 h-6 text-orange-300/40 animate-bounce" style={{ animationDelay: '8s', animationDuration: '5s' }}>
          ♥
        </div>
      </div>
    </>
  );
};

export default FloralElements;
