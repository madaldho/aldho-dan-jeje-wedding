
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flower, Heart, Sparkles } from 'lucide-react';

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
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/70 via-rose-800/60 to-orange-700/70"></div>
      </div>

      {/* Floating elements animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="text-pink-300/40" size={16 + i * 3} />
            ) : i % 3 === 1 ? (
              <Flower className="text-orange-300/40" size={18 + i * 2} />
            ) : (
              <Sparkles className="text-rose-300/40" size={14 + i * 3} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-sm mx-auto">
        {/* Arabic Calligraphy */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="text-3xl mb-4 font-arabic text-orange-200">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <p className="text-sm opacity-80">Bismillahirrahmanirrahim</p>
        </motion.div>

        <motion.div 
          className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 border border-white/30 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-2xl mb-4 font-arabic text-orange-200">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </div>
          <p className="text-xs font-light tracking-[0.3em] mb-4 opacity-90">
            ASSALAMU'ALAIKUM WR. WB.
          </p>
          
          <p className="text-xs font-light tracking-[0.2em] mb-4 opacity-90">
            THE WEDDING OF
          </p>
          
          <div className="relative">
            <motion.h1 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-rose-300 to-orange-300 bg-clip-text text-transparent font-elegant"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Aldho
            </motion.h1>
            
            <div className="flex items-center justify-center my-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-pink-300 to-transparent"></div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <Flower className="text-orange-300 mx-3" size={20} />
              </motion.div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-orange-300 to-transparent"></div>
            </div>
            
            <motion.h1 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-300 via-rose-300 to-pink-300 bg-clip-text text-transparent font-elegant"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              Jeje
            </motion.h1>
          </div>
          
          <div className="mb-6">
            <p className="text-sm font-light mb-2 text-pink-200">
              Putra dari Bapak Ahmad & Ibu Siti
            </p>
            <p className="text-sm font-light text-pink-200">
              Putri dari Bapak Budi & Ibu Dewi
            </p>
          </div>

          <div className="max-w-xs mx-auto">
            <blockquote className="text-xs font-light italic leading-relaxed text-orange-200 mb-2">
              "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجاً"
            </blockquote>
            <blockquote className="text-xs font-light italic leading-relaxed text-orange-200">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri"
            </blockquote>
            <p className="text-xs mt-3 opacity-75">- QS. Ar-Rum: 21 -</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
