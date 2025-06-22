import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlareCard } from '@/components/ui/glare-card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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



  const nextImage = () => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : 0);
  };

  const prevImage = () => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : 0);
  };

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
                className="group cursor-pointer transform transition-all duration-500 hover:scale-102 hover:-translate-y-1 animate-float"
                onClick={() => setSelectedImage(index)}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-base font-medium drop-shadow-lg">Foto {index + 1}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* Image Modal - Fullscreen Popup */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center cursor-pointer backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center cursor-default animate-in fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:bg-white/20 z-20 bg-black/50 backdrop-blur-sm rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20 bg-black/50 backdrop-blur-sm rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            
            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-20 bg-black/50 backdrop-blur-sm rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            
            {/* Image Container */}
            <div className="w-full h-full flex items-center justify-center p-2 md:p-4">
              <img
                src={images[selectedImage]}
                alt={`Pre-wedding photo ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{
                  maxHeight: 'calc(100vh - 16px)',
                  maxWidth: 'calc(100vw - 16px)'
                }}
              />
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}


    </section>
  );
};

export default Gallery;
