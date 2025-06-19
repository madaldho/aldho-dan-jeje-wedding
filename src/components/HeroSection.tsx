
import { Flower } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 via-pink-900/50 to-amber-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-lg mx-auto">
        <div className="animate-fade-in bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <p className="text-xs font-light tracking-[0.3em] mb-4 opacity-90">
            THE WEDDING OF
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 bg-clip-text text-transparent font-elegant">
            Aldho & Jeje
          </h1>
          
          <div className="flex justify-center mb-6">
            <Flower className="text-rose-300 mx-2 animate-bounce" size={24} />
            <Flower className="text-amber-300 mx-2 animate-bounce" size={24} style={{ animationDelay: '0.2s' }} />
            <Flower className="text-pink-300 mx-2 animate-bounce" size={24} style={{ animationDelay: '0.4s' }} />
          </div>
          
          <div className="mb-8">
            <p className="text-lg md:text-xl font-light mb-2 text-rose-200">
              Putra dari Bapak Ahmad & Ibu Siti
            </p>
            <div className="flex justify-center my-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300"></div>
            </div>
            <p className="text-lg md:text-xl font-light text-rose-200">
              Putri dari Bapak Budi & Ibu Dewi
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <blockquote className="text-sm md:text-base font-light italic leading-relaxed text-amber-200">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri"
            </blockquote>
            <p className="text-xs mt-4 opacity-75">- QS. Ar-Rum: 21 -</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
