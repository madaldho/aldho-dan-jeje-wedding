
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'countdown', label: 'Countdown' },
    { id: 'event-details', label: 'Acara' },
    { id: 'love-story', label: 'Kisah' },
    { id: 'gallery', label: 'Galeri' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'wishes', label: 'Ucapan' },
    { id: 'digital-gift', label: 'Kado' },
    { id: 'contact', label: 'Kontak' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="font-bold text-xl text-slate-800">
            A&S
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation - Simple scroll indicator */}
          <div className="md:hidden">
            <div className="w-8 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
