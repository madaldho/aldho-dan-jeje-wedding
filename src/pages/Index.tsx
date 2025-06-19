
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import TabNavigation from '../components/TabNavigation';
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
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FloralElements />
      <MusicPlayer />
      <TabNavigation />
      
      <motion.div className="pb-20">
        <motion.div 
          id="hero"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div 
          id="countdown"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>
        
        <motion.div 
          id="event-details"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EventDetails />
        </motion.div>
        
        <motion.div 
          id="love-story"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LoveStory />
        </motion.div>
        
        <motion.div 
          id="gallery"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Gallery />
        </motion.div>
        
        <motion.div 
          id="rsvp"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <RSVP guestName={guestName} />
        </motion.div>
        
        <motion.div 
          id="wishes"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Wishes />
        </motion.div>
        
        <motion.div 
          id="digital-gift"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <DigitalGift />
        </motion.div>
        
        <motion.div 
          id="contact"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
      
      <motion.footer 
        className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 text-white py-6 text-center relative"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <p className="text-sm opacity-90">© 2024 Aldho & Jeje Wedding - Made with ❤️</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Index;
