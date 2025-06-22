
import * as React from "react"
import { cn } from "@/lib/utils"
import { Flower, Heart, Sparkles } from "lucide-react"

export interface FlowerBalloonsProps {
  type?: "flowers" | "hearts" | "sparkles" | "mixed"
  count?: number
  className?: string
  onLaunch?: () => void
}

const FlowerBalloons = React.forwardRef<HTMLDivElement, FlowerBalloonsProps>(
  ({ type = "mixed", count = 20, className, onLaunch }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [isAnimating, setIsAnimating] = React.useState(false)
    
    const launchAnimation = React.useCallback(() => {
      if (isAnimating) return
      
      setIsAnimating(true)
      
      const container = containerRef.current
      if (!container) return
      
      // Clear previous animations
      container.innerHTML = ''
      
      for (let i = 0; i < count; i++) {
        const element = document.createElement('div')
        element.className = 'flower-balloon-item'
        
        // Random starting position
        const startX = Math.random() * window.innerWidth
        const startY = window.innerHeight + 50
        
        // Random end position
        const endX = startX + (Math.random() - 0.5) * 400
        const endY = -100
        
        // Random animation duration
        const duration = 3000 + Math.random() * 2000
        
        // Random rotation
        const rotation = Math.random() * 720
        
        // Random scale
        const scale = 0.5 + Math.random() * 1
        
        // Choose icon based on type
        let iconSvg = ''
        const colors = ['#ff69b4', '#ff1493', '#ffa500', '#ff6347', '#da70d6']
        const color = colors[Math.floor(Math.random() * colors.length)]
        
        if (type === 'flowers' || (type === 'mixed' && i % 3 === 0)) {
          iconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9a3 3 0 0 0 3 3h1.5M12 7.5V9a3 3 0 0 1-3 3H7.5"/><circle cx="12" cy="12" r="1"/><path d="m8.5 8.5 7 7"/><path d="m15.5 8.5-7 7"/></svg>`
        } else if (type === 'hearts' || (type === 'mixed' && i % 3 === 1)) {
          iconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>`
        } else {
          iconSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>`
        }
        
        element.innerHTML = iconSvg
        element.style.cssText = `
          position: fixed;
          left: ${startX}px;
          top: ${startY}px;
          z-index: 9999;
          pointer-events: none;
          transform: scale(${scale});
          transition: all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        `
        
        container.appendChild(element)
        
        // Trigger animation
        setTimeout(() => {
          element.style.transform = `translate(${endX - startX}px, ${endY - startY}px) rotate(${rotation}deg) scale(${scale})`
          element.style.opacity = '0'
        }, 50)
        
        // Remove element after animation
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element)
          }
        }, duration + 100)
      }
      
      if (onLaunch) {
        onLaunch()
      }
      
      // Reset animation state
      setTimeout(() => {
        setIsAnimating(false)
      }, 1000)
    }, [type, count, onLaunch, isAnimating])

    React.useImperativeHandle(ref, () => {
      const element = containerRef.current;
      if (element) {
        return Object.assign(element, { launchAnimation });
      }
      return null;
    }, [launchAnimation])

    return (
      <div 
        ref={containerRef} 
        className={cn("flower-balloons-container fixed inset-0 pointer-events-none", className)} 
      />
    )
  }
)
FlowerBalloons.displayName = "FlowerBalloons"

export { FlowerBalloons }
