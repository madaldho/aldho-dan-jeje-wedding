
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMusicToggle = () => {
    setIsPlaying(!isPlaying);
    // Music implementation would go here
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Image/Video */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        {/* Guest Name */}
        {guestName && (
          <div className="mb-8 animate-fade-in">
            <p className="text-sm font-light tracking-widest mb-2 opacity-90">KEPADA YTH.</p>
            <h2 className="text-2xl md:text-3xl font-elegant mb-4 text-rose-200">
              Bapak/Ibu/Saudara/i
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-200 mb-6">
              {guestName}
            </h1>
          </div>
        )}
        
        {/* Wedding Announcement */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-lg font-light tracking-wide mb-4 opacity-90">
            Kami mengundang Anda untuk berbagi kebahagiaan dalam
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-300 to-amber-300 bg-clip-text text-transparent">
            Pernikahan Kami
          </h2>
        </div>

        {/* Open Invitation Button */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: '1s' }}>
          <Button
            onClick={onOpenInvitation}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Buka Undangan
          </Button>
        </div>

        {/* Music Control */}
        <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={handleMusicToggle}
            variant="outline"
            size="sm"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30 rounded-full"
          >
            {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default CoverPage;
