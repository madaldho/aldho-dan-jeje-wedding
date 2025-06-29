
import { useState, useEffect, useRef, useCallback } from 'react';
import { LimelightNav, NavItem } from '@/components/ui/limelight-nav';
import { Home, Heart, Calendar, Camera, Video, Mail } from 'lucide-react';
import { scroller } from 'react-scroll';

const navItems: NavItem[] = [
	{ id: 'home', icon: <Home />, label: 'Home', sectionId: 'hero-section' },
	{
		id: 'bride-groom',
		icon: <Heart />,
		label: 'Pengantin',
		sectionId: 'bride-groom',
	},
	{ id: 'event-details', icon: <Calendar />, label: 'Acara', sectionId: 'event-details' },
	// { id: 'gallery', icon: <Camera />, label: 'Foto', sectionId: 'gallery' },
	{ id: 'video-gallery', icon: <Video />, label: 'Video', sectionId: 'video-gallery' },
	{ id: 'rsvp-wishes', icon: <Mail />, label: 'Ucapan', sectionId: 'rsvp-wishes' },
];

const StickyNav = () => {
	const [activeLink, setActiveLink] = useState(0);
	const [isSticky, setIsSticky] = useState(false);
	const isScrollingRef = useRef(false);
	const scrollTimeoutRef = useRef<number>();
	const lastManualScrollRef = useRef<number>(-1);

	const handleScroll = useCallback(() => {
		const offset = window.scrollY;
		setIsSticky(offset > window.innerHeight * 0.8);

		// Don't update active link during manual scrolling
		if (isScrollingRef.current) return;

		const sections = navItems.map(item => document.getElementById(item.sectionId)).filter(Boolean);
		const scrollPosition = window.scrollY + 150; // Better offset for detection

		// Find the current section with improved logic
		let currentSection = 0;
		let minDistance = Infinity;
		
		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			if (section) {
				const sectionTop = section.offsetTop;
				const sectionBottom = sectionTop + section.offsetHeight;
				
				// Check if scroll position is within this section
				if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
					currentSection = i;
					break;
				}
				
				// Find closest section if none contains the scroll position
				const distance = Math.abs(scrollPosition - sectionTop);
				if (distance < minDistance) {
					minDistance = distance;
					currentSection = i;
				}
			}
		}

		// Only update if it's different from last manual scroll target
		if (lastManualScrollRef.current === -1 || currentSection !== lastManualScrollRef.current) {
			setActiveLink(currentSection);
		}
	}, []);

	useEffect(() => {
		const throttledHandleScroll = () => {
			requestAnimationFrame(handleScroll);
		};
		
		window.addEventListener('scroll', throttledHandleScroll, { passive: true });
		// Initial call to set the correct active section
		handleScroll();

		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}
		};
	}, [handleScroll]);

	const handleTabChange = useCallback((index: number) => {
		// Store the target index for manual scroll
		lastManualScrollRef.current = index;
		
		// Immediately update the active link for instant visual feedback
		setActiveLink(index);
		
		// Set scrolling flag to prevent scroll handler from interfering
		isScrollingRef.current = true;

		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
		}

		// Scroll to the section
		scroller.scrollTo(navItems[index].sectionId, {
			duration: 1000,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: -80, // Better offset for positioning
		});

		// Reset scrolling flag and manual scroll reference after animation completes
		scrollTimeoutRef.current = window.setTimeout(() => {
			isScrollingRef.current = false;
			lastManualScrollRef.current = -1; // Reset manual scroll reference
		}, 1200); // Longer timeout to ensure scroll completes
	}, []);

	return (
		<div
			className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300 ${
				isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}
		>
			<LimelightNav
				items={navItems}
				activeLink={activeLink}
				onTabChange={handleTabChange}
				className="bg-white/80 dark:bg-card/50 dark:border-accent/50 rounded-xl backdrop-blur-md"
				limelightClassName="bg-rose-500 shadow-[0_50px_15px_#f43f5e]"
			/>
		</div>
	);
};

export default StickyNav;
