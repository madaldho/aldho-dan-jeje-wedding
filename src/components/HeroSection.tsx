
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
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 to-amber-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <div className="animate-fade-in">
          <p className="text-sm font-light tracking-[0.3em] mb-4 opacity-90">
            THE WEDDING OF
          </p>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-rose-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
            Andi & Sari
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl font-light mb-2 text-rose-200">
              Putra dari Bapak Ahmad & Ibu Siti
            </p>
            <p className="text-lg opacity-75 mb-4">&</p>
            <p className="text-xl md:text-2xl font-light text-rose-200">
              Putri dari Bapak Budi & Ibu Dewi
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg md:text-xl font-light italic leading-relaxed text-amber-200">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."
            </blockquote>
            <p className="text-sm mt-4 opacity-75">- QS. Ar-Rum: 21 -</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;
