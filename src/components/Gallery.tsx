
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const images = [
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const videoUrl = "https://api.our-wedding.link/uploads/866ecb50-3798-11f0-ab97-99e3c95d401a.mp3"; // You can replace with actual video URL

  const nextImage = () => {
    setSelectedImage(prev => prev !== null ? (prev + 1) % images.length : 0);
  };

  const prevImage = () => {
    setSelectedImage(prev => prev !== null ? (prev - 1 + images.length) % images.length : 0);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-rose-50 to-amber-50 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4"
        style={{ y }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 font-elegant">
            Galeri Foto & Video
          </h2>
          <p className="text-lg text-slate-600">
            Momen-momen indah perjalanan cinta kami
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, staggerChildren: 0.1 }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-40 md:h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-800 font-elegant">
            Video Prewedding
          </h3>
          
          <motion.div 
            className="relative max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedVideo(videoUrl)}
          >
            <div className="aspect-video bg-gradient-to-br from-rose-200 to-amber-200 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Play className="w-8 h-8 text-rose-600 ml-1" />
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </motion.div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <motion.img 
                src={images[selectedImage]}
                alt="Enlarged"
                className="w-full h-full object-contain rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Controls */}
              <Button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X className="w-5 h-5" />
              </Button>
              
              <Button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <Button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative max-w-4xl w-full">
              <Button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 p-0 z-10"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                <p className="text-white">Video akan diputar di sini</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Gallery;
