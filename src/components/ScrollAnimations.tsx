import { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Flower2, Star } from 'lucide-react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'rotateIn' | 'slideInBounce';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 0.8,
  threshold = 0.1,
  className = '' 
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fadeInUp';
      case 'fadeInLeft':
        return 'animate-fadeInLeft';
      case 'fadeInRight':
        return 'animate-fadeInRight';
      case 'scaleIn':
        return 'animate-scaleIn';
      case 'rotateIn':
        return 'animate-rotateIn';
      case 'slideInBounce':
        return 'animate-slideInBounce';
      default:
        return 'animate-fadeInUp';
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`transition-all ${getAnimationClass()} ${className}`}
      style={{ 
        animationDuration: `${duration}s`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

// Floating particles component for interactive background
export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    icon: 'heart' | 'sparkle' | 'flower' | 'star';
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 12 + Math.random() * 20,
        icon: ['heart', 'sparkle', 'flower', 'star'][Math.floor(Math.random() * 4)] as any,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 12
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 20000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string, size: number) => {
    const props = { size, className: "text-pink-300/30" };
    switch (type) {
      case 'heart': return <Heart {...props} />;
      case 'sparkle': return <Sparkles {...props} />;
      case 'flower': return <Flower2 {...props} />;
      case 'star': return <Star {...props} />;
      default: return <Heart {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        >
          {getIcon(particle.icon, particle.size)}
        </div>
      ))}
    </div>
  );
};

// Parallax scroll effect
export const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  className?: string; 
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`
      }}
    >
      {children}
    </div>
  );
};

// Interactive hover effects
export const InteractiveCard = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 transform hover:scale-[1.02] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.05) 0%, transparent 40%)`
          }}
        />
      )}
      {children}
    </div>
  );
};