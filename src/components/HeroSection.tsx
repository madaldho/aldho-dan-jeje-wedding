import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen h-screen relative flex items-center justify-center overflow-hidden bg-rose-50"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient Animation */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #fde2e4, #fff1f2 30%, #fdf2f8 60%, #fce7f3 100%)`,
        }}
      />

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const duration = Math.random() * 10 + 10;
          const delay = Math.random() * 10;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-rose-200/50 animate-float"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                transform: `translate(${mousePosition.x * (0.01 + i * 0.0005)}px, ${mousePosition.y * (0.01 + i * 0.0005)}px)`
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-rose-800 font-light tracking-widest mb-4 uppercase">
            The Wedding Of
          </p>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-rose-800 font-elegant">
            Aldho
          </h1>
          <div className="my-6 md:my-8 text-4xl md:text-5xl font-elegant text-rose-500">&</div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-rose-800 font-elegant">
            Jeje
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <p className="text-lg md:text-xl text-rose-800 font-light mb-2">
           Minggu, 13 Juli 2025
          </p>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute -bottom-24 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-rose-400 rounded-full mx-auto relative">
                <div className="w-1 h-3 bg-rose-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-light">Scroll Down</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
