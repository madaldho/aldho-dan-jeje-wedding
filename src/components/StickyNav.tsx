
import { useState, useEffect, useRef, useCallback } from 'react';
import { LimelightNav, NavItem } from '@/components/ui/limelight-nav';
import { Home, Heart, Calendar, Camera, Mail } from 'lucide-react';
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
	{ id: 'gallery', icon: <Camera />, label: 'Galeri', sectionId: 'gallery' },
	{ id: 'rsvp-wishes', icon: <Mail />, label: 'Ucapan', sectionId: 'rsvp-wishes' },
];

const StickyNav = () => {
	const [activeLink, setActiveLink] = useState(0);
	const [isSticky, setIsSticky] = useState(false);
	const isScrollingRef = useRef(false);
	const scrollTimeoutRef = useRef<number>();

	const handleScroll = useCallback(() => {
		const offset = window.scrollY;
		setIsSticky(offset > window.innerHeight * 0.8);

		if (isScrollingRef.current) return;

		const sections = navItems.map(item => document.getElementById(item.sectionId));
		const scrollPosition = window.scrollY + 200; // Adjusted offset for better detection

		// Find the current section
		let currentSection = 0;
		for (let i = sections.length - 1; i >= 0; i--) {
			const section = sections[i];
			if (section && section.offsetTop <= scrollPosition) {
				currentSection = i;
				break;
			}
		}

		setActiveLink(currentSection);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		// Initial call to set the correct active section
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (scrollTimeoutRef.current) {
				clearTimeout(scrollTimeoutRef.current);
			}
		};
	}, [handleScroll]);

	const handleTabChange = useCallback((index: number) => {
		// Immediately update the active link for instant visual feedback
		setActiveLink(index);
		
		// Set scrolling flag to prevent scroll handler from interfering
		isScrollingRef.current = true;

		if (scrollTimeoutRef.current) {
			clearTimeout(scrollTimeoutRef.current);
		}

		// Scroll to the section
		scroller.scrollTo(navItems[index].sectionId, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart',
			offset: -100, // Adjusted offset for better positioning
		});

		// Reset scrolling flag after animation completes
		scrollTimeoutRef.current = window.setTimeout(() => {
			isScrollingRef.current = false;
		}, 1000); // Increased timeout to ensure scroll completes
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
