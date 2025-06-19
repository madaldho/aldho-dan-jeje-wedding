
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, MapPin, Heart, Camera, Users, Gift, Phone } from 'lucide-react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('hero');

  const tabs = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'countdown', icon: Calendar, label: 'Countdown' },
    { id: 'bride-groom', icon: Heart, label: 'Mempelai' },
    { id: 'event-details', icon: MapPin, label: 'Acara' },
    { id: 'gallery', icon: Camera, label: 'Galeri' },
    { id: 'rsvp', icon: Users, label: 'RSVP' },
    { id: 'digital-gift', icon: Gift, label: 'Kado' },
    { id: 'contact', icon: Phone, label: 'Kontak' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update active tab based on scroll position
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPos = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-pink-200/50 shadow-2xl">
        <div className="flex items-center justify-around px-1 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex flex-col items-center p-2 rounded-xl transition-all duration-300 min-w-0 ${
                  isActive 
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                }`}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-4 h-4 mb-1" />
                <span className="text-xs font-medium truncate">{tab.label}</span>
                
                {isActive && (
                  <motion.div
                    className="absolute -top-1 w-6 h-1 bg-white rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default TabNavigation;
