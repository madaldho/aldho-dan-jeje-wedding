
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
      
      <div className="fixed bottom-24 right-4 z-50 flex gap-2">
        <Button
          onClick={toggleMusic}
          className="bg-white/90 backdrop-blur-md hover:bg-white text-pink-600 rounded-full w-10 h-10 shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 ml-0.5" />
          )}
        </Button>
        
        <Button
          onClick={toggleMute}
          className="bg-white/90 backdrop-blur-md hover:bg-white text-pink-600 rounded-full w-10 h-10 shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </Button>
      </div>
      
      {/* Music wave animation */}
      {isPlaying && (
        <div className="fixed bottom-32 right-4 z-40 flex items-end gap-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-pink-500 rounded-full animate-pulse"
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
