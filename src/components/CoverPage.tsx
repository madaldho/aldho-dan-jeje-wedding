
import { Button } from '@/components/ui/button';
import { Flower, Heart, Sparkles } from 'lucide-react';
import { FlowerBalloons } from '@/components/ui/flower-balloons';
import { useRef } from 'react';

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const flowerBalloonsRef = useRef<{ launchAnimation: () => void } | null>(null);

  const handleOpenInvitation = () => {
    // Launch flower balloons animation
    if (flowerBalloonsRef.current) {
      flowerBalloonsRef.current.launchAnimation();
    }
    
    // Delay the actual invitation opening to let animation play
    setTimeout(() => {
      onOpenInvitation();
    }, 500);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center animate-fadeIn"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-pulse"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          animationDuration: '20s'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-indigo-800/70 to-violet-700/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              top: `${5 + (i * 6)}%`,
              left: `${2 + (i * 6)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${10 + i}s`
            }}
          >
            {i % 3 === 0 ? (
              <Flower className="text-white/30 animate-spin" size={16 + (i * 2)} style={{ animationDuration: '8s' }} />
            ) : i % 3 === 1 ? (
              <Heart className="text-purple-300/40 animate-pulse" size={14 + (i * 2)} />
            ) : (
              <Sparkles className="text-violet-300/40 animate-ping" size={12 + (i * 2)} />
            )}
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-md mx-auto">
        {/* Islamic Greeting */}
        <div 
          className="mb-8 animate-slideDown"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="text-xl mb-4 font-arabic text-purple-200">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </div>
            <p className="text-sm opacity-90 tracking-wide">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
          </div>
        </div>

        {/* Guest Name */}
        {guestName && (
          <div 
            className="mb-8 animate-scaleIn"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <p className="text-xs font-light tracking-[0.3em] mb-3 opacity-90">KEPADA YTH.</p>
              <h2 className="text-base font-elegant mb-3 text-purple-200">
                Bapak/Ibu/Saudara/i
              </h2>
              <h1 
                className="text-xl font-bold text-violet-200 mb-4 break-words animate-pulse"
              >
                {guestName}
              </h1>
              <div 
                className="w-20 h-0.5 bg-gradient-to-r from-purple-300 to-violet-300 mx-auto animate-expandWidth"
                style={{ animationDelay: '1.2s' }}
              />
            </div>
          </div>
        )}
        
        {/* Wedding Announcement */}
        <div 
          className="mb-10 animate-slideUp"
          style={{ animationDelay: '1s' }}
        >
          <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            <p className="text-sm font-light tracking-wide mb-6 opacity-90">
              Kami mengundang Anda untuk berbagi kebahagiaan dalam
            </p>
            <h2 
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent font-elegant animate-pulse"
            >
              Pernikahan Kami
            </h2>
            <div className="flex justify-center space-x-3 mb-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="animate-spin"
                  style={{ 
                    animationDuration: `${4 + i}s`,
                    animationDelay: `${i * 0.7}s`
                  }}
                >
                  <Flower className="text-violet-300 animate-pulse" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Invitation Button */}
        <div 
          className="animate-scaleIn"
          style={{ animationDelay: '1.3s' }}
        >
          <div className="hover:scale-105 transition-transform duration-300">
            <Button
              onClick={handleOpenInvitation}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 hover:from-purple-600 hover:via-indigo-600 hover:to-violet-600 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 border-2 border-white/30 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
              <Flower className="w-6 h-6 mr-3 animate-spin" style={{ animationDuration: '4s' }} />
              Buka Undangan
            </Button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes scaleIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          
          @keyframes expandWidth {
            from { width: 0; }
            to { width: 5rem; }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1.2s ease-out;
          }
          
          .animate-slideDown {
            animation: slideDown 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
            opacity: 0;
          }
          
          .animate-expandWidth {
            animation: expandWidth 0.8s ease-out forwards;
            width: 0;
          }
          
          .animate-shimmer {
            animation: shimmer 2s infinite ease-in-out;
          }
        `
      }} />
        
      {/* Flower Balloons Animation */}
      <FlowerBalloons 
        ref={flowerBalloonsRef}
        type="mixed"
        count={25}
      />
    </div>
  );
};

export default CoverPage;
