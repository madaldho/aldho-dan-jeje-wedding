
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Flower, MapPin } from 'lucide-react';

const BrideGroom = () => {
  const bride = {
    name: "Nur Azizah",
    fullName: "Nur Azizah",
    nickname: "Jeje",
    parents: "Putri dari Bpk. Tahudin, S. Pd, SD & Ibu Nur Fathiya",
    image: "https://images.unsplash.com/photo-1494790108755-2616c27de5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    
    
  };

  const groom = {
    name: "Muhamad Ali Ridho, S. Pd",
    fullName: "Muhamad Ali Ridho, S. Pd",
    nickname: "Aldho",
    parents: "Putra dari Bpk. Ahmad Muhtar, S. Pd. I & Ibu Nuraeni, S. Pd.I",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
   
  };

  return (
    <section id="bride-groom" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 via-rose-500/6 to-orange-500/8 animate-gradient-shift"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            <Heart className="text-pink-300/60" size={Math.random() > 0.5 ? 16 : 12} />
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 animate-bounce">
            <Heart className="w-16 h-16 text-pink-500 mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-elegant gradient-text animate-shimmer">
            Mempelai
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
            Dengan rahmat Allah SWT, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Groom Card */}
          <div className="transform transition-all duration-500 hover:scale-[1.02] animate-fadeInLeft">
            <div className="glass-card p-6 md:p-8 h-full">
              {/* Enhanced Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/8 animate-gradient-shift" />
              
              <div className="text-center relative">
                  <div className="relative inline-block mb-8 hover:scale-105 transition-transform duration-500">
                    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/60 shadow-lg">
                      <img 
                        src={groom.image} 
                        alt={groom.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-3 animate-pulse">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 font-elegant gradient-text animate-shimmer">
                      {groom.name}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium">
                      ({groom.nickname})
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                      {groom.parents}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 pt-6">
                      
                    </div>
                  </div>
                </div>
               </div>
          </div>

          {/* Decorative Divider - Hidden on desktop, visible on mobile */}
          <div className="md:hidden flex items-center justify-center py-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-pink-400"></div>
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-full p-4 shadow-lg animate-pulse">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
          </div>

          {/* Bride Card */}
          <div className="transform transition-all duration-500 hover:scale-[1.02] animate-fadeInRight">
            <div className="glass-card p-6 md:p-8 h-full">
              {/* Enhanced Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/8 animate-gradient-shift" />
              
              <div className="text-center relative">
                  <div className="relative inline-block mb-8 hover:scale-105 transition-transform duration-500">
                    <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-white/60 shadow-lg">
                      <img 
                        src={bride.image} 
                        alt={bride.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-3 animate-pulse">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 font-elegant gradient-text animate-shimmer">
                      {bride.name}
                    </h3>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium">
                      ({bride.nickname})
                    </p>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                      {bride.parents}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 pt-6">
                      
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>

        <div className="mt-16 mx-4 md:mx-8">

          <div className="glass-card p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic font-medium mb-6">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya"
              </p>
              <p className="text-pink-600 text-base md:text-lg font-bold gradient-text animate-shimmer">
                - QS. Ar-Rum: 21 -
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroom;
