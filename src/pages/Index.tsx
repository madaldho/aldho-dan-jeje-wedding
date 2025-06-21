
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoverPage from '../components/CoverPage';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import BrideGroom from '../components/BrideGroom';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import Wishes from '../components/Wishes';
import DigitalGift from '../components/DigitalGift';

import MusicPlayer from '../components/MusicPlayer';
import TabNavigation from '../components/TabNavigation';
import FloralElements from '../components/FloralElements';
import { ScrollAnimation, FloatingParticles, ParallaxSection, InteractiveCard } from '../components/ScrollAnimations';

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [showScrollOverlay, setShowScrollOverlay] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const toParam = urlParams.get('to');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam));
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setShowScrollOverlay(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showInvitation]);

  if (!showInvitation) {
    return (
      <CoverPage 
        guestName={guestName} 
        onOpenInvitation={() => setShowInvitation(true)} 
      />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 z-0"></div>
      
      <FloatingParticles />
      <FloralElements />
      <MusicPlayer />
      <TabNavigation />
      
      {/* Gradient Blur Overlay */}
      <div className={`scroll-gradient-overlay ${showScrollOverlay ? 'active' : ''}`}></div>
      
      <div className="pb-20 relative z-10">
        <ScrollAnimation animation="fadeInUp" delay={0.5} duration={1.2}>
          <div id="hero" className="section-container hero-section">
            <HeroSection />
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="scaleIn" delay={0.2} duration={0.8}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="countdown">
                <CountdownTimer />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInLeft" delay={0.1} duration={0.9}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="bride-groom">
                <BrideGroom />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInRight" delay={0.2} duration={0.8}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="event-details">
                <EventDetails />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slideInBounce" delay={0.3} duration={1.0}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="gallery">
                <Gallery />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="rotateIn" delay={0.2} duration={0.9}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="rsvp">
                <RSVP guestName={guestName} />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="wishes">
                <Wishes />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="scaleIn" delay={0.3} duration={1.0}>
          <div className="section-container">
            <InteractiveCard className="mx-4 md:mx-8">
              <div id="digital-gift">
                <DigitalGift />
              </div>
            </InteractiveCard>
          </div>
        </ScrollAnimation>
      </div>
      
      <ScrollAnimation animation="fadeInUp" delay={0.4} duration={1.0}>
        <footer className="bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white py-20 md:py-32 px-4 md:px-8 text-center relative overflow-hidden backdrop-blur-xl">
          {/* Luxurious Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),rgba(79,70,229,0.05))] animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-[url('/patterns/elegant-dots.svg')] opacity-20 animate-float-slow"></div>
          
          {/* Premium Floating Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-500/10 to-transparent blur-2xl"></div>
          <div className="absolute -top-10 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          {/* Animated Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-12 left-1/4 w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent rotate-45 animate-sparkle"></div>
            <div className="absolute top-20 right-1/3 w-1 h-16 bg-gradient-to-b from-indigo-400 to-transparent -rotate-45 animate-sparkle delay-300"></div>
            <div className="absolute bottom-16 left-1/3 w-1 h-24 bg-gradient-to-b from-violet-400 to-transparent rotate-12 animate-sparkle delay-500"></div>
          </div>

          <div className="relative z-10 container mx-auto max-w-5xl">
            <InteractiveCard className="max-w-2xl mx-auto transform hover:scale-102 transition-all duration-300">
              <div className="mb-16 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <h3 className="text-5xl md:text-7xl font-bold font-elegant bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent mb-6 animate-shimmer-slow">
                  Aldho & Jeje
                </h3>
                <p className="text-xl md:text-2xl font-light tracking-widest text-indigo-200 animate-pulse-slow">
                  13 Juli 2025
                </p>
              </div>
              
              <div className="glass-card backdrop-blur-lg bg-white/5 p-10 rounded-3xl mb-16 transform hover:scale-102 transition-all duration-300 border border-white/10">
                <p className="text-lg md:text-xl text-indigo-100 font-light leading-relaxed mb-6 italic">
                  "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                  <p className="text-base text-indigo-200 font-arabic">QS. Ar-Rum: 21</p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="text-base text-indigo-200 font-light space-y-4 relative z-10">
                  <p className="flex items-center justify-center gap-3">
                    <span className="text-purple-300">©</span>
                    <span className="tracking-wider">2025 Aldho & Jeje Wedding</span>
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <span>Crafted with</span>
                    <span className="relative">
                      <span className="absolute -inset-2 bg-red-500/20 blur-xl rounded-full animate-pulse-slow"></span>
                      <span className="relative text-xl">❤️</span>
                    </span>
                    <span>for our magical moment</span>
                  </p>
                </div>
              </div>
            </InteractiveCard>
          </div>
        </footer>
      </ScrollAnimation>
    </div>
  );
};

export default Index;
