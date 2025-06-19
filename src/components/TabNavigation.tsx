
import { useState, useEffect } from 'react';
import { Home, Calendar, MapPin, Heart, Camera, Users, Gift, MessageCircle } from 'lucide-react';
import { LimelightNav, NavItem } from './ui/limelight-nav';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const tabs = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'countdown', icon: Calendar, label: 'Countdown' },
    { id: 'bride-groom', icon: Heart, label: 'Mempelai' },
    { id: 'event-details', icon: MapPin, label: 'Acara' },
    { id: 'gallery', icon: Camera, label: 'Galeri' },
    { id: 'rsvp', icon: Users, label: 'RSVP' },
    { id: 'wishes', icon: MessageCircle, label: 'Ucapan' },
    { id: 'digital-gift', icon: Gift, label: 'Kado' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection when programmatically scrolling
      if (isScrolling) return;
      
      // Update active tab based on scroll position
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPos = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(tabs[i].id);
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      const offsetTop = element.offsetTop;
      const offset = sectionId === 'hero' ? 0 : 100; // No offset for hero, 100px for others to account for fixed nav
      
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth'
      });
      
      // Reset scrolling flag after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Smooth scroll usually takes ~500-800ms
    }
  };

  const handleTabChange = (index: number) => {
    setActiveIndex(index);
    setActiveTab(tabs[index].id);
    // Add small delay to ensure state updates before scrolling
    setTimeout(() => {
      scrollToSection(tabs[index].id);
    }, 50);
  };

  const navItems: NavItem[] = tabs.map((tab, index) => ({
    id: tab.id,
    icon: <tab.icon className="w-6 h-6" />,
    label: tab.label,
    onClick: () => {
      // This will be handled by onTabChange in LimelightNav
      // No need to call scrollToSection here to avoid duplication
    }
  }));

  return (
    <div className="tab-navigation">
      <div 
        className="w-full max-w-fit animate-slideUpNav"
        style={{ animationDelay: '0.5s' }}
      >
        <LimelightNav
          items={navItems}
          defaultActiveIndex={0}
          activeIndex={activeIndex}
          onTabChange={handleTabChange}
          className="bg-white/95 backdrop-blur-xl border border-rose-200/50 shadow-lg mx-auto"
          limelightClassName="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 shadow-[0_50px_15px_rgba(244,63,94,0.3)]"
          iconContainerClassName="hover:bg-rose-50/50 transition-colors duration-200"
          iconClassName="text-slate-600 hover:text-rose-500"
        />
      </div>
      
      <style jsx>{`
        @keyframes slideUpNav {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideUpNav {
          animation: slideUpNav 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default TabNavigation;
