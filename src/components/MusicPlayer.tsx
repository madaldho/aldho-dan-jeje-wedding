
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

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

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://api.our-wedding.link/uploads/866ecb50-3798-11f0-ab97-99e3c95d401a.mp3"
        preload="auto"
      />
      
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <Button
          onClick={toggleMusic}
          className="bg-white/90 backdrop-blur-md hover:bg-white text-rose-600 rounded-full w-12 h-12 shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </Button>
        
        <Button
          onClick={toggleMute}
          className="bg-white/90 backdrop-blur-md hover:bg-white text-rose-600 rounded-full w-12 h-12 shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </Button>
      </div>
      
      {/* Music wave animation */}
      {isPlaying && (
        <div className="fixed bottom-20 right-6 z-40 flex items-end gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-rose-500 rounded-full animate-pulse"
              style={{
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MusicPlayer;
