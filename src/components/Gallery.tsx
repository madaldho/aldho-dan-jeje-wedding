import { useEffect } from 'react';
import { GlareCard } from '@/components/ui/glare-card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden relative">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/8 via-pink-500/6 to-orange-500/8 animate-gradient-shift"></div>
        
        {/* Enhanced Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-rose-300/30 to-pink-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-orange-300/30 to-rose-300/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-xl animate-bounce"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-800 font-elegant gradient-text animate-shimmer">
            Galeri Foto
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Koleksi foto indah perjalanan cinta kami
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="glass-card p-8 md:p-12 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 font-elegant gradient-text animate-shimmer">
            Foto Pre-Wedding
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group transform transition-all duration-500 hover:scale-102 hover:-translate-y-1 animate-float"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={`Pre-wedding photo ${index + 1}`}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>




    </section>
  );
};

export default Gallery;
