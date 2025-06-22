import { Button } from "@/components/ui/button";
import { Flower, Mail, Sparkles } from "lucide-react";
import { FlowerBalloons } from "@/components/ui/flower-balloons";
import { useEffect, useRef } from "react";

interface CoverPageProps {
  guestName: string;
  onOpenInvitation: () => void;
}

interface FullscreenElement extends HTMLElement {
	mozRequestFullScreen?: () => Promise<void>;
	webkitRequestFullscreen?: () => Promise<void>;
	msRequestFullscreen?: () => Promise<void>;
}

interface FlowerBalloonsHandle {
  launchAnimation: () => void;
}

const CoverPage = ({ guestName, onOpenInvitation }: CoverPageProps) => {
  const flowerBalloonsRef = useRef<FlowerBalloonsHandle>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const openFullscreen = () => {
    const elem: FullscreenElement = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch((err) => console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`));
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  useEffect(() => {
    // Automatically attempt to go fullscreen on mobile devices when the page loads.
    if (window.innerWidth < 768) {
      openFullscreen();
    }
  }, []);

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed", e));
    }
    openFullscreen();
    if (flowerBalloonsRef.current) {
      flowerBalloonsRef.current.launchAnimation();
    }
    setTimeout(() => {
      onOpenInvitation();
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 wedding-content">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/80 via-rose-100/60 to-purple-100/80 animate-gradient"></div>
      
      {/* Animated Background Pattern with Parallax */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 to-rose-200/40 animate-wave"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-purple-200/30 to-pink-200/30 animate-wave-reverse"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i % 4} opacity-70`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}>
            {i % 4 === 0 ? (
              <div className="w-2 h-2 bg-pink-400/60 rounded-full shadow-lg animate-pulse-glow"></div>
            ) : i % 4 === 1 ? (
              <Sparkles className="text-rose-400/70 w-3 h-3 animate-sparkle" />
            ) : i % 4 === 2 ? (
              <div className="w-1.5 h-1.5 bg-purple-400/80 rounded-full animate-twinkle"></div>
            ) : (
              <Flower className="text-pink-500/60 w-4 h-4 animate-flower-spin" />
            )}
          </div>
        ))}
      </div>

      {/* Magical Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-300/30 to-transparent animate-light-ray"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-rose-300/30 to-transparent animate-light-ray-delayed"></div>
      </div>

      {/* Main Content with Enhanced Animations */}
      <div className="relative z-20 text-center px-4 w-full max-w-sm mx-auto h-full flex flex-col justify-center py-8 animate-main-entrance">
        
        {/* Islamic Greeting */}
        <div className="luxury-card mb-6 animate-card-entrance-1">
          <div className="text-center">
            <div className="text-base mb-2 font-arabic text-rose-700 leading-relaxed animate-text-glow">
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </div>
            <p className="text-xs tracking-wide text-rose-600 font-light animate-fade-in-up">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </p>
          </div>
        </div>

        {/* Wedding Title */}
        <div className="luxury-card mb-6 animate-card-entrance-2">
          <div className="text-center">
            <div className="luxury-ornament mb-3 animate-ornament-glow"></div>
            <p className="text-xs font-light tracking-wide text-rose-600 mb-4 leading-relaxed animate-text-wave">
              Dengan penuh cinta dan kebahagiaan, kami mengundang Anda
            </p>
            
            <div className="mb-4">
              <h2 className="text-lg font-serif font-bold text-rose-800 mb-3 tracking-wide animate-title-shine">
                THE WEDDING OF
              </h2>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="text-center animate-name-bounce-left">
                  <div className="luxury-name-card-mobile hover-lift">
                    <span className="luxury-name-mobile text-rose-800 animate-name-gradient">Aldho</span>
                  </div>
                </div>
                
                <div className="luxury-ampersand-mobile animate-ampersand-pulse">&</div>
                
                <div className="text-center animate-name-bounce-right">
                  <div className="luxury-name-card-mobile hover-lift">
                    <span className="luxury-name-mobile text-rose-800 animate-name-gradient">Jeje</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="luxury-ornament animate-ornament-glow"></div>
          </div>
        </div>

        {/* Guest Name */}
        {guestName && (
          <div className="luxury-card mb-6 animate-card-entrance-3">
            <div className="text-center">
              <p className="text-xs tracking-wide text-rose-500 uppercase font-light mb-2 animate-text-shimmer">
                Kepada Yang Terhormat
              </p>
              <h1 className="text-lg font-bold text-rose-900 mb-3 break-words leading-tight animate-guest-name-glow">
                {guestName}
              </h1>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto animate-line-expand"></div>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="animate-button-entrance">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full blur animate-button-glow opacity-75 group-hover:opacity-100"></div>
            <Button
              onClick={handleOpenInvitation}
              className="luxury-button-mobile group relative hover-3d">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 animate-icon-bounce" />
                <span className="font-semibold tracking-wide animate-text-pulse">Buka Undangan</span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 animate-sparkle-burst" />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <FlowerBalloons ref={flowerBalloonsRef} type="mixed" count={25} />
      <audio ref={audioRef} src="/among-us-role-reveal-sound-effect-359833.mp3" preload="auto" />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Crimson+Text:wght@400;600&display=swap');
        
        .luxury-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 1.25rem;
          box-shadow: 
            0 20px 40px -12px rgba(244, 63, 94, 0.12),
            0 0 0 1px rgba(255,255,255,0.5) inset;
          position: relative;
          overflow: hidden;
        }
        
        .luxury-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(244, 63, 94, 0.3), transparent);
        }
        
        .luxury-name-mobile {
          font-family: 'Dancing Script', cursive;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #be185d, #e11d48, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .luxury-name-card-mobile {
          position: relative;
          padding: 0.25rem 1rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7));
          border-radius: 15px;
          border: 1px solid rgba(244, 63, 94, 0.2);
          box-shadow: 0 4px 16px rgba(244, 63, 94, 0.08);
        }
        
        .luxury-ampersand-mobile {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #be185d;
        }
        
        .luxury-button-mobile {
          background: linear-gradient(135deg, #e11d48 0%, #be185d 50%, #a21caf 100%);
          color: white;
          border: none;
          border-radius: 40px;
          padding: 0.875rem 2rem;
          font-size: 0.95rem;
          font-weight: 600;
          box-shadow: 
            0 15px 30px rgba(244, 63, 94, 0.35),
            0 0 0 1px rgba(255,255,255,0.2) inset;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .luxury-button-mobile:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(244, 63, 94, 0.5),
            0 0 0 1px rgba(255,255,255,0.3) inset;
        }
        
        .luxury-ornament {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e11d48, transparent);
          margin: 0 auto;
          position: relative;
        }
        
        .luxury-ornament::before,
        .luxury-ornament::after {
          content: '';
          position: absolute;
          top: -2px;
          width: 5px;
          height: 5px;
          background: #e11d48;
          border-radius: 50%;
        }
        
        .luxury-ornament::before { left: -3px; }
        .luxury-ornament::after { right: -3px; }
        
        .hover-lift:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        
        .hover-3d:hover {
          transform: perspective(1000px) rotateX(5deg) translateY(-3px) scale(1.05);
        }
        
        /* Enhanced Animations */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          50% { transform: translateX(10%) rotate(1deg); }
        }
        
        @keyframes wave-reverse {
          0%, 100% { transform: translateX(0%) rotate(0deg); }
          50% { transform: translateX(-10%) rotate(-1deg); }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.7; }
          33% { transform: translateY(-15px) rotate(120deg) scale(1.1); opacity: 1; }
          66% { transform: translateY(-8px) rotate(240deg) scale(0.9); opacity: 0.8; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.6; }
          33% { transform: translateY(-20px) rotate(-120deg) scale(1.2); opacity: 1; }
          66% { transform: translateY(-10px) rotate(-240deg) scale(0.8); opacity: 0.9; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.8; }
          50% { transform: translateY(-25px) rotate(180deg) scale(1.3); opacity: 1; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0.7; }
          25% { transform: translateY(-12px) rotate(90deg) scale(1.1); opacity: 0.9; }
          75% { transform: translateY(-18px) rotate(270deg) scale(0.9); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(244, 63, 94, 0.3); }
          50% { box-shadow: 0 0 20px rgba(244, 63, 94, 0.8); }
        }
        
        @keyframes sparkle {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.7; }
          25% { transform: rotate(90deg) scale(1.2); opacity: 1; }
          50% { transform: rotate(180deg) scale(0.8); opacity: 0.5; }
          75% { transform: rotate(270deg) scale(1.1); opacity: 0.9; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes flower-spin {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(0.9); }
          75% { transform: rotate(270deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes light-ray {
          0%, 100% { opacity: 0; transform: scaleY(0); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        
        @keyframes light-ray-delayed {
          0%, 100% { opacity: 0; transform: scaleY(0); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
        
        @keyframes main-entrance {
          0% { opacity: 0; transform: scale(0.8) translateY(50px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes card-entrance-1 {
          0% { opacity: 0; transform: translateY(-30px) scale(0.9) rotateX(45deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotateX(0deg); }
        }
        
        @keyframes card-entrance-2 {
          0% { opacity: 0; transform: translateX(-40px) scale(0.8) rotateY(25deg); }
          100% { opacity: 1; transform: translateX(0) scale(1) rotateY(0deg); }
        }
        
        @keyframes card-entrance-3 {
          0% { opacity: 0; transform: translateX(40px) scale(0.8) rotateY(-25deg); }
          100% { opacity: 1; transform: translateX(0) scale(1) rotateY(0deg); }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(244, 63, 94, 0.3); }
          50% { text-shadow: 0 0 15px rgba(244, 63, 94, 0.6), 0 0 25px rgba(244, 63, 94, 0.4); }
        }
        
        @keyframes ornament-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(225, 29, 72, 0.3); }
          50% { box-shadow: 0 0 15px rgba(225, 29, 72, 0.8); }
        }
        
        @keyframes text-wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes title-shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes name-bounce-left {
          0% { transform: translateX(-50px) rotate(-10deg); opacity: 0; }
          50% { transform: translateX(5px) rotate(2deg); }
          100% { transform: translateX(0) rotate(0deg); opacity: 1; }
        }
        
        @keyframes name-bounce-right {
          0% { transform: translateX(50px) rotate(10deg); opacity: 0; }
          50% { transform: translateX(-5px) rotate(-2deg); }
          100% { transform: translateX(0) rotate(0deg); opacity: 1; }
        }
        
        @keyframes name-gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        
        @keyframes ampersand-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.2) rotate(5deg); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes guest-name-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(244, 63, 94, 0.3); }
          50% { text-shadow: 0 0 20px rgba(244, 63, 94, 0.7), 0 0 30px rgba(244, 63, 94, 0.4); }
        }
        
        @keyframes line-expand {
          0% { width: 0; }
          100% { width: 4rem; }
        }
        
        @keyframes button-entrance {
          0% { opacity: 0; transform: scale(0.5) translateY(30px) rotateZ(-15deg); }
          70% { transform: scale(1.1) translateY(-5px) rotateZ(5deg); }
          100% { opacity: 1; transform: scale(1) translateY(0) rotateZ(0deg); }
        }
        
        @keyframes button-glow {
          0%, 100% { transform: scale(1); filter: blur(8px); }
          50% { transform: scale(1.1); filter: blur(12px); }
        }
        
        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes text-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes sparkle-burst {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 0; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        /* Animation Applications */
        .animate-gradient { animation: gradient 6s ease infinite; background-size: 200% 200%; }
        .animate-wave { animation: wave 8s ease-in-out infinite; }
        .animate-wave-reverse { animation: wave-reverse 10s ease-in-out infinite; }
        .animate-float-0 { animation: float-0 infinite ease-in-out; }
        .animate-float-1 { animation: float-1 infinite ease-in-out; }
        .animate-float-2 { animation: float-2 infinite ease-in-out; }
        .animate-float-3 { animation: float-3 infinite ease-in-out; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite; }
        .animate-sparkle { animation: sparkle 3s infinite; }
        .animate-twinkle { animation: twinkle 2s infinite; }
        .animate-flower-spin { animation: flower-spin 6s infinite; }
        .animate-light-ray { animation: light-ray 4s infinite; }
        .animate-light-ray-delayed { animation: light-ray-delayed 4s infinite 2s; }
        .animate-main-entrance { animation: main-entrance 1.2s ease-out; }
        .animate-card-entrance-1 { animation: card-entrance-1 1s ease-out 0.3s forwards; opacity: 0; }
        .animate-card-entrance-2 { animation: card-entrance-2 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-card-entrance-3 { animation: card-entrance-3 1s ease-out 0.9s forwards; opacity: 0; }
        .animate-text-glow { animation: text-glow 3s infinite; }
        .animate-ornament-glow { animation: ornament-glow 3s infinite; }
        .animate-text-wave { animation: text-wave 2s infinite; }
        .animate-title-shine { 
          background: linear-gradient(90deg, #be185d, #e11d48, #f97316, #be185d);
          background-size: 400% 100%;
          animation: title-shine 3s infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-name-bounce-left { animation: name-bounce-left 1s ease-out 0.8s forwards; opacity: 0; }
        .animate-name-bounce-right { animation: name-bounce-right 1s ease-out 1s forwards; opacity: 0; }
        .animate-name-gradient { 
          background: linear-gradient(90deg, #be185d, #e11d48, #f97316, #a21caf, #be185d);
          background-size: 300% 100%;
          animation: name-gradient 4s infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-ampersand-pulse { animation: ampersand-pulse 2s infinite; }
        .animate-text-shimmer { 
          background: linear-gradient(90deg, #be185d, #e11d48, #be185d);
          background-size: 200% 100%;
          animation: text-shimmer 2s infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .animate-guest-name-glow { animation: guest-name-glow 3s infinite; }
        .animate-line-expand { animation: line-expand 1s ease-out 1.2s forwards; width: 0; }
        .animate-button-entrance { animation: button-entrance 1.2s ease-out 1.4s forwards; opacity: 0; }
        .animate-button-glow { animation: button-glow 2s infinite; }
        .animate-icon-bounce { animation: icon-bounce 1s infinite; }
        .animate-text-pulse { animation: text-pulse 2s infinite; }
        .animate-sparkle-burst { animation: sparkle-burst 0.6s ease-out; }
        .animate-fade-in-up { animation: slideUp 1s ease-out 0.5s forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default CoverPage;
