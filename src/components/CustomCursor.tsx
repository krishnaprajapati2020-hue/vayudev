import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'card' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch device or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number = 0;

    let isRunning = false;

    const render = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.22;
      ringY += dy * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX.toFixed(1)}px, ${ringY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId = requestAnimationFrame(render);
        isRunning = true;
      } else {
        ringX = mouseX;
        ringY = mouseY;
        isRunning = false;
      }
    };

    const wakeUp = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }

      wakeUp();

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('[data-cursor]');
        const clickable = target.closest('button, a, input, textarea, select');
        const card = target.closest('[data-cursor-card]');

        if (interactive) {
          const text = interactive.getAttribute('data-cursor') || '';
          setCursorText((prev) => (prev !== text ? text : prev));
          setCursorVariant('hover');
        } else if (card) {
          setCursorText('EXPLORE');
          setCursorVariant('card');
        } else if (clickable) {
          setCursorText('');
          setCursorVariant('hover');
        } else {
          setCursorText('');
          setCursorVariant('default');
        }
      }
    };

    const onMouseLeave = () => setCursorVariant('hidden');
    const onMouseEnter = () => setCursorVariant('default');

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  const ringSizeClass =
    cursorVariant === 'card'
      ? 'w-18 h-18 text-[10px]'
      : cursorVariant === 'hover'
      ? 'w-12 h-12 text-[9px]'
      : 'w-8 h-8 text-[9px]';

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden" aria-hidden="true">
      {/* Outer ambient ring with hardware-accelerated transform */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-[#8C2424]/40 bg-[#8C2424]/10 backdrop-blur-[1px] flex items-center justify-center font-mono font-bold text-[#8C2424] tracking-wider pointer-events-none transition-[width,height] duration-200 will-change-transform ${ringSizeClass}`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        {cursorText && (
          <span className="select-none animate-pulse uppercase">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center pinpoint dot with hardware-accelerated transform */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#8C2424] pointer-events-none shadow-sm will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
}
