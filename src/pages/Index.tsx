
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

const Index = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [guestName, setGuestName] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract guest name from URL parameter
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
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50 relative">
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
      
      <footer className="bg-slate-800 text-white py-8 text-center">
        <p className="text-sm opacity-75">© 2024 Wedding Invitation - Made with Love</p>
      </footer>
    </div>
  );
};

export default Index;
