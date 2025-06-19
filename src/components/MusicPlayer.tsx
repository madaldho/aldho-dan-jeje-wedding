
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Here you would implement actual audio functionality
    console.log(isPlaying ? 'Pausing music' : 'Playing music');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <Button
        onClick={toggleMusic}
        className="bg-white/90 backdrop-blur hover:bg-white text-slate-700 rounded-full w-14 h-14 shadow-lg border border-white/50 transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </Button>
      
      {/* Music indicator */}
      {isPlaying && (
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse">
          <Music className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
