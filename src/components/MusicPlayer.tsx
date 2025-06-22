import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

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
        src="/audio wedding.mp3"
        preload="auto"
      />
      
      <div className="fixed top-4 right-4 z-50 animate-fade-in">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
          
          <Button
            onClick={toggleMusic}
            size="icon"
            className="relative bg-white/90 backdrop-blur-sm hover:bg-white text-pink-600 hover:text-pink-700 rounded-full shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </Button>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
