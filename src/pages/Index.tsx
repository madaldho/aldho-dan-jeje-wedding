
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CoverPage from '../components/CoverPage';
import HeroSection from '../components/HeroSection';
import CountdownTimer from '../components/CountdownTimer';
import EventDetails from '../components/EventDetails';
import LoveStory from '../components/LoveStory';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import Wishes from '../components/Wishes';
import DigitalGift from '../components/DigitalGift';
import Contact from '../components/Contact';
import MusicPlayer from '../components/MusicPlayer';
import Navigation from '../components/Navigation';
import FloralElements from '../components/FloralElements';

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [guestName, setGuestName] = useState('');
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const toParam = urlParams.get('to');
    if (toParam) {
      setGuestName(decodeURIComponent(toParam));
    }
  }, [location]);

  if (!showInvitation) {
    return (
      <CoverPage 
        guestName={guestName} 
        onOpenInvitation={() => setShowInvitation(true)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 relative overflow-hidden">
      <FloralElements />
      <Navigation />
      <MusicPlayer />
      
      <HeroSection />
      <CountdownTimer />
      <EventDetails />
      <LoveStory />
      <Gallery />
      <RSVP guestName={guestName} />
      <Wishes />
      <DigitalGift />
      <Contact />
      
      <footer className="bg-gradient-to-r from-rose-900 to-pink-900 text-white py-8 text-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <p className="text-sm opacity-90">© 2024 Aldho & Jeje Wedding - Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
