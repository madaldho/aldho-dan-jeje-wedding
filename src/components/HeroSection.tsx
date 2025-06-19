
import { Flower, Heart, Sparkles, Star, Flower2 } from 'lucide-react';
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 transition-all duration-1000"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-pink-500/10 to-orange-500/15 animate-gradient-shift"></div>
        
        {/* Interactive decorative circles */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-300/20 rounded-full blur-xl transition-all duration-500 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-300/25 to-rose-300/20 rounded-full blur-xl transition-all duration-700 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.04}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-300/25 to-orange-300/20 rounded-full blur-xl transition-all duration-600 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.04}px, ${-mousePosition.y * 0.02}px)`
          }}
        ></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-32 right-1/4 w-16 h-16 bg-gradient-to-br from-yellow-300/20 to-orange-300/15 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-to-br from-rose-300/20 to-pink-300/15 rounded-full blur-lg animate-pulse"></div>
      </div>

      {/* Enhanced Floating elements animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => {
          const icons = [Heart, Flower, Sparkles, Star, Flower2];
          const Icon = icons[i % icons.length];
          const colors = ['text-pink-300/40', 'text-orange-300/40', 'text-rose-300/40', 'text-yellow-300/40', 'text-purple-300/40'];
          const animations = ['animate-bounce', 'animate-pulse', 'animate-ping', 'animate-float'];
          
          return (
            <div
              key={i}
              className={`absolute ${animations[i % animations.length]} transition-all duration-500`}
              style={{
                top: `${15 + (i * 8)}%`,
                left: `${8 + (i * 9)}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${4 + (i % 4)}s`,
                transform: `translate(${mousePosition.x * (0.01 + i * 0.002)}px, ${mousePosition.y * (0.01 + i * 0.002)}px)`
              }}
            >
              <Icon 
                className={`${colors[i % colors.length]} hover:scale-125 transition-transform duration-300`} 
                size={14 + (i % 4) * 4} 
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Arabic Calligraphy with enhanced styling */}
        <div className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-4xl md:text-5xl mb-6 font-arabic text-rose-600 animate-shimmer">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <p className="text-base md:text-lg text-slate-600 font-light tracking-wider">Bismillahirrahmanirrahim</p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 border border-rose-200/30 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-pulse-glow">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-2xl md:text-3xl mb-6 font-arabic text-rose-600 animate-gradient-shift">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </div>
            <p className="text-sm md:text-base font-light tracking-[0.3em] mb-6 text-slate-600">
              ASSALAMU'ALAIKUM WR. WB.
            </p>
            
            <p className="text-xs md:text-sm font-light tracking-[0.2em] mb-8 text-slate-500">
              THE WEDDING OF
            </p>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text font-elegant hover:scale-105 transition-transform duration-300 cursor-default">
              Aldho
            </h1>
            
            <div className="flex items-center justify-center my-8 md:my-12">
              <div className="w-20 md:w-24 h-0.5 bg-gradient-to-r from-rose-400 to-transparent animate-shimmer"></div>
              <div className="mx-6 md:mx-8">
                <div className="relative">
                  <Flower className="text-orange-500 animate-spin hover:scale-125 transition-all duration-300" size={32} style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-lg animate-pulse"></div>
                </div>
              </div>
              <div className="w-20 md:w-24 h-0.5 bg-gradient-to-l from-orange-400 to-transparent animate-shimmer"></div>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 gradient-text font-elegant hover:scale-105 transition-transform duration-300 cursor-default">
              Jeje
            </h1>
          </div>
          
          <div className={`max-w-lg mx-auto transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card p-6 md:p-8 rounded-2xl mb-8 hover:bg-white/20 transition-all duration-300">
              <blockquote className="text-lg md:text-xl font-arabic text-rose-600 mb-4 leading-relaxed">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجاً
              </blockquote>
              <blockquote className="text-sm md:text-base font-light italic leading-relaxed text-rose-600 mb-3">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri"
              </blockquote>
              <p className="text-xs md:text-sm text-slate-500 font-arabic">- QS. Ar-Rum: 21 -</p>
            </div>
            
            {/* Interactive scroll indicator */}
            <div className="mt-12 animate-bounce">
              <div className="w-6 h-10 border-2 border-rose-400 rounded-full mx-auto relative">
                <div className="w-1 h-3 bg-rose-400 rounded-full mx-auto mt-2 animate-pulse"></div>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-light">Scroll untuk melihat lebih</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
