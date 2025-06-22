
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoverPage from '../components/CoverPage';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import BrideGroom from '../components/BrideGroom';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import RSVPWishes from '../components/RSVPWishes'; // Import the new component
import DigitalGift from '../components/DigitalGift';

import MusicPlayer from '../components/MusicPlayer';
import StickyNav from '../components/StickyNav';

import FloralElements from '../components/FloralElements';
import { ScrollAnimation, FloatingParticles, ParallaxSection } from '../components/ScrollAnimations';

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
      <StickyNav />
      
      {/* Gradient Blur Overlay */}
      <div className={`scroll-gradient-overlay ${showScrollOverlay ? 'active' : ''}`}></div>
      
      <div className="relative z-10">
        <ScrollAnimation animation="fadeInUp" delay={0.5} duration={1.2}>
          <div id="hero-section" className="section-container hero-section">
            <HeroSection />
          </div>
        </ScrollAnimation>
        
        <div id="countdown">
          <CountdownTimer />
        </div>

        <ScrollAnimation animation="fadeInLeft" delay={0.1} duration={0.9}>
          <div className="section-container">
            <div id="bride-groom">
              <BrideGroom />
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInRight" delay={0.2} duration={0.8}>
          <div className="section-container">
            <div id="event-details">
              <EventDetails />
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slideInBounce" delay={0.3} duration={1.0}>
          <div className="section-container">
            <div id="gallery">
              <Gallery />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="zoomIn" delay={0.4} duration={1.1}>
          <div className="section-container">
            <div id="video-gallery">
              <VideoGallery />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={0.2} duration={1.0}>
          <div className="section-container">
            <div id="rsvp-wishes">
              <RSVPWishes guestName={guestName} />
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={0.4} duration={1.2}>
          <div className="section-container">
            <div id="digital-gift">
              <DigitalGift />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Index;
