
import { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Music, Gift } from 'lucide-react';
import { FlowerBalloons } from './ui/flower-balloons';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowContent(true), 800);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    onOpenInvitation();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative Elements */}
          <div className="mb-8 flex justify-center items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-pulse" />
            <Heart className="text-purple-300 animate-pulse" size={24} />
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent animate-pulse" />
          </div>

          {/* Wedding Invitation Text */}
          <div className="space-y-4 mb-12">
            <p className="text-purple-200 text-lg font-light tracking-wider">
              The Wedding of
            </p>
            <h1 className="text-6xl md:text-8xl font-bold font-elegant text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-200 to-violet-300 animate-shimmer">
              Aldho & Jeje
            </h1>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Calendar className="text-purple-300" size={20} />
              <p className="text-purple-200 text-xl font-light">
                13 Juli 2025
              </p>
            </div>
          </div>

          {/* Guest Name */}
          {guestName && showContent && (
            <div className={`mb-12 transition-all duration-800 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="glass-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
                <p className="text-purple-200 text-sm font-light mb-2 uppercase tracking-wider">
                  Kepada Yth.
                </p>
                <p className="text-purple-100 text-2xl font-semibold">
                  {guestName}
                </p>
              </div>
            </div>
          )}

          {/* Invitation Message */}
          {showContent && (
            <div className={`mb-12 transition-all duration-800 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-purple-200 text-lg font-light leading-relaxed">
                  Dengan penuh sukacita, kami mengundang Anda untuk hadir dalam momen bahagia kami
                </p>
                <div className="flex items-center justify-center gap-4">
                  <MapPin className="text-purple-300" size={16} />
                  <p className="text-purple-300 text-sm">
                    Desa Dukuh, Kapetakan, Cirebon
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Open Invitation Button */}
          {showContent && (
            <div className={`transition-all duration-800 delay-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button
                onClick={handleOpenInvitation}
                className="group relative bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Gift className="w-5 h-5" />
                  Buka Undangan
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          )}

          {/* Background Music Note */}
          <div className={`mt-12 transition-all duration-800 delay-1200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex items-center justify-center gap-2 text-purple-300/70">
              <Music className="w-4 h-4 animate-pulse" />
              <p className="text-sm font-light">
                Background music will play when opened
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flower Balloons Animation */}
      <FlowerBalloons />
    </div>
  );
};

export default CoverPage;
