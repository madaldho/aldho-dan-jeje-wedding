import React, { useState, useRef, useLayoutEffect, cloneElement, useEffect } from 'react';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>;
const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" /></svg>;
const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>;

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  onClick?: () => void;
  sectionId: string;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home', sectionId: 'home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore', sectionId: 'explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications', sectionId: 'notifications' },
];

type LimelightNavProps = {
  items?: NavItem[];
  activeLink?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  activeLink = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  // Update limelight position whenever activeLink changes
  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeLink];
    
    if (limelight && activeItem) {
      // Ensure we have valid activeLink index
      const validActiveLink = Math.max(0, Math.min(activeLink, items.length - 1));
      const targetItem = navItemRefs.current[validActiveLink];
      
      if (targetItem) {
        const newLeft = targetItem.offsetLeft + targetItem.offsetWidth / 2 - limelight.offsetWidth / 2;
        limelight.style.left = `${newLeft}px`;
        
        if (!isReady) {
          setTimeout(() => setIsReady(true), 50);
        }
      }
    }
  }, [activeLink, isReady, items]);

  // Ensure limelight updates when component mounts or items change
  useEffect(() => {
    if (items.length > 0 && !isReady) {
      // Delay to ensure DOM is ready
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 150);
      
      return () => clearTimeout(timer);
    }
  }, [items, isReady]);

  // Handle window resize to recalculate limelight position
  useEffect(() => {
    const handleResize = () => {
      if (isReady) {
        const limelight = limelightRef.current;
        const activeItem = navItemRefs.current[activeLink];
        
        if (limelight && activeItem) {
          const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
          limelight.style.left = `${newLeft}px`;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeLink, isReady]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (index: number) => {
    onTabChange?.(index);
  };

  return (
    <nav className={`relative inline-flex items-center h-16 rounded-lg bg-card text-foreground border px-2 ${className}`}>
      {items.map(({ id, icon, label }, index) => (
          <a
            key={id}
            ref={el => (navItemRefs.current[index] = el)}
            className={`relative z-20 flex h-full cursor-pointer items-center justify-center p-5 ${iconContainerClassName}`}
            onClick={() => handleItemClick(index)}
            aria-label={label}
          >
            {cloneElement(icon, {
              className: `w-6 h-6 transition-opacity duration-100 ease-in-out ${
                activeLink === index ? 'opacity-100' : 'opacity-40'
              } ${icon.props.className || ''} ${iconClassName || ''}`,
            })}
          </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-0 z-10 w-11 h-[5px] rounded-full bg-primary shadow-[0_50px_15px_var(--primary)] ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[5px] w-[160%] h-14 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
