import { cn } from "@/lib/utils";
import { useRef } from "react";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);
  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });
  const containerStyle = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as any;

  const backgroundStyle = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.61 22.581 21.61 22.581' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M6.44444 7.00002C6.44444 7.00002 19.5556 20.1111 19.5556 20.1111' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M10.1111 10.5556C10.1111 10.5556 15.4444 15.8889 15.4444 15.8889' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
  } as any;

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!refElement.current) return;
    const rect = refElement.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercentage = (x / rect.width) * 100;
    const yPercentage = (y / rect.height) * 100;
    
    state.current.glare.x = xPercentage;
    state.current.glare.y = yPercentage;
    state.current.background.x = xPercentage;
    state.current.background.y = yPercentage;
    state.current.rotate.x = (yPercentage - 50) / 10;
    state.current.rotate.y = (xPercentage - 50) / 10;

    if (refElement.current) {
      refElement.current.style.setProperty("--m-x", `${xPercentage}%`);
      refElement.current.style.setProperty("--m-y", `${yPercentage}%`);
      refElement.current.style.setProperty("--r-x", `${state.current.rotate.x}deg`);
      refElement.current.style.setProperty("--r-y", `${state.current.rotate.y}deg`);
      refElement.current.style.setProperty("--bg-x", `${xPercentage}%`);
      refElement.current.style.setProperty("--bg-y", `${yPercentage}%`);
    }
  };

  const handleMouseEnter = () => {
    isPointerInside.current = true;
    if (refElement.current) {
      refElement.current.style.setProperty("--opacity", "1");
    }
  };

  const handleMouseLeave = () => {
    isPointerInside.current = false;
    if (refElement.current) {
      refElement.current.style.setProperty("--opacity", "0");
      refElement.current.style.setProperty("--m-x", "50%");
      refElement.current.style.setProperty("--m-y", "50%");
      refElement.current.style.setProperty("--r-x", "0deg");
      refElement.current.style.setProperty("--r-y", "0deg");
      refElement.current.style.setProperty("--bg-x", "50%");
      refElement.current.style.setProperty("--bg-y", "50%");
    }
  };

  return (
    <div
      ref={refElement}
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] transition-transform duration-[var(--duration)] ease-[var(--easing)]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent",
        "before:opacity-[var(--opacity)] before:transition-opacity before:duration-[var(--duration)]",
        "after:absolute after:inset-0 after:bg-[image:var(--foil-svg)] after:bg-[length:var(--foil-size)] after:bg-[position:var(--bg-x)_var(--bg-y)]",
        "after:opacity-[var(--opacity)] after:transition-all after:duration-[var(--duration)]",
        className
      )}
      style={{
        ...containerStyle,
        ...backgroundStyle,
        transform: `perspective(1000px) rotateX(var(--r-x)) rotateY(var(--r-y))`
      }}
      onMouseMove={updateMousePosition}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};