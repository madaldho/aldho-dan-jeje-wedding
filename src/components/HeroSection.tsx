
import { useState, useEffect } from 'react';
import { Flower, Heart } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        transform: `translateY(${scrollY * 0.5}px)`,
      }}
    >
      {/* Background with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-pink-900/60 to-amber-900/70"></div>
      </div>

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300/30 animate-float"
            size={16 + i * 4}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-sm mx-auto">
        {/* Arabic Calligraphy */}
        <div className="mb-8 animate-fade-in">
          <div className="text-4xl mb-4 font-arabic text-amber-200">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <p className="text-sm opacity-80">Bismillahirrahmanirrahim</p>
        </div>

        <div className="animate-scale-in bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl" style={{ animationDelay: '0.3s' }}>
          <div className="text-2xl mb-4 font-arabic text-amber-200">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </div>
          <p className="text-xs font-light tracking-[0.3em] mb-4 opacity-90">
            ASSALAMU'ALAIKUM WR. WB.
          </p>
          
          <p className="text-xs font-light tracking-[0.2em] mb-4 opacity-90">
            THE WEDDING OF
          </p>
          
          <div className="relative">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 bg-clip-text text-transparent font-elegant animate-pulse">
              Aldho
            </h1>
            
            <div className="flex items-center justify-center my-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-rose-300 to-transparent"></div>
              <Flower className="text-amber-300 mx-3 animate-spin" size={20} style={{ animationDuration: '6s' }} />
              <div className="w-12 h-0.5 bg-gradient-to-l from-amber-300 to-transparent"></div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-pink-300 to-rose-300 bg-clip-text text-transparent font-elegant animate-pulse" style={{ animationDelay: '0.5s' }}>
              Jeje
            </h1>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-light mb-2 text-rose-200">
              Putra dari Bapak Ahmad & Ibu Siti
            </p>
            <p className="text-sm font-light text-rose-200">
              Putri dari Bapak Budi & Ibu Dewi
            </p>
          </div>

          <div className="max-w-xs mx-auto">
            <blockquote className="text-xs font-light italic leading-relaxed text-amber-200 mb-2">
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجاً"
            </blockquote>
            <blockquote className="text-xs font-light italic leading-relaxed text-amber-200">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri"
            </blockquote>
            <p className="text-xs mt-3 opacity-75">- QS. Ar-Rum: 21 -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
