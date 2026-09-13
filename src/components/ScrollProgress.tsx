import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8C2424] via-[#F5C451] to-[#8C2424] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Floating minimal scroll percentage pill on bottom right */}
      <div className="fixed bottom-6 right-6 z-30 hidden md:flex items-center gap-2 rounded-full bg-stone-900/80 px-3 py-1.5 text-[11px] font-mono font-medium text-white shadow-lg backdrop-blur-md border border-white/10 pointer-events-none">
        <span className="h-1.5 w-1.5 rounded-full bg-[#F5C451] animate-pulse" />
        <span>{percentage}% SCROLLED</span>
      </div>
    </>
  );
}
