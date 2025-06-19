
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Flower } from 'lucide-react';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-pink-900/60 to-amber-900/70"></div>
      </div>

      {/* Floating Flowers */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <Flower 
            key={i}
            className={`absolute text-white/20 animate-pulse`}
            size={20 + (i * 5)}
            style={{
              top: `${10 + (i * 10)}%`,
              left: `${5 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 45}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-md mx-auto">
        {/* Guest Name */}
        {guestName && (
          <div className="mb-8 animate-fade-in bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-xs font-light tracking-[0.3em] mb-2 opacity-90">KEPADA YTH.</p>
            <h2 className="text-lg font-elegant mb-2 text-rose-200">
              Bapak/Ibu/Saudara/i
            </h2>
            <h1 className="text-xl font-bold text-amber-200 mb-2 break-words">
              {guestName}
            </h1>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-300 to-amber-300 mx-auto"></div>
          </div>
        )}
        
        {/* Wedding Announcement */}
        <div className="mb-8 animate-fade-in bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20" style={{ animationDelay: '0.5s' }}>
          <p className="text-sm font-light tracking-wide mb-4 opacity-90">
            Kami mengundang Anda untuk berbagi kebahagiaan dalam
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent font-elegant">
            Pernikahan Kami
          </h2>
          <div className="flex justify-center space-x-2 mb-4">
            <Flower className="text-rose-300 animate-spin" size={16} style={{ animationDuration: '3s' }} />
            <Flower className="text-amber-300 animate-spin" size={16} style={{ animationDuration: '4s' }} />
            <Flower className="text-pink-300 animate-spin" size={16} style={{ animationDuration: '5s' }} />
          </div>
        </div>

        {/* Open Invitation Button */}
        <div className="mb-6 animate-scale-in" style={{ animationDelay: '1s' }}>
          <Button
            onClick={onOpenInvitation}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 border-2 border-white/30 backdrop-blur-sm"
          >
            <Flower className="w-5 h-5 mr-2" />
            Buka Undangan
          </Button>
        </div>

        {/* Music Control */}
        <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={handleMusicToggle}
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full backdrop-blur-sm"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
