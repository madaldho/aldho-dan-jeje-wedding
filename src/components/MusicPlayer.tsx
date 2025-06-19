
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.loop = true;
      
      // Auto-play music when component mounts
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('Auto-play prevented:', error);
        }
      };
      
      playAudio();
    }
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.error('Error playing music:', error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://api.our-wedding.link/uploads/866ecb50-3798-11f0-ab97-99e3c95d401a.mp3"
        preload="auto"
      />
      
      <motion.div 
        className="fixed top-4 right-4 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={toggleMusic}
            className="bg-white/90 backdrop-blur-xl hover:bg-white text-pink-600 rounded-full w-12 h-12 shadow-2xl border border-white/50 transition-all duration-300"
            size="icon"
          >
            <motion.div
              key={isPlaying ? 'pause' : 'play'}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.div>
          </Button>
        </motion.div>
        
        {/* Music wave animation - minimal */}
        {isPlaying && (
          <motion.div 
            className="absolute -bottom-1 -right-1 flex items-end gap-0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-pink-500 rounded-full"
                animate={{
                  height: [2, 6, 2],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default MusicPlayer;
