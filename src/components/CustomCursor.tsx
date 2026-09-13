import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'card' | 'hidden'>('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('[data-cursor]');
      const clickable = target.closest('button, a, input, textarea, select');
      const card = target.closest('[data-cursor-card]');

      if (interactive) {
        const text = interactive.getAttribute('data-cursor') || '';
        setCursorText(text);
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
    };

    const onMouseLeave = () => {
      setCursorVariant('hidden');
    };

    const onMouseEnter = () => {
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (isTouchDevice || cursorVariant === 'hidden') return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden">
      {/* Outer ambient glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#8C2424]/40 bg-[#8C2424]/10 backdrop-blur-[1px] flex items-center justify-center font-mono text-[9px] font-bold text-[#8C2424] tracking-wider pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorVariant === 'card' ? 36 : cursorVariant === 'hover' ? 24 : 16),
          y: mousePosition.y - (cursorVariant === 'card' ? 36 : cursorVariant === 'hover' ? 24 : 16),
          width: cursorVariant === 'card' ? 72 : cursorVariant === 'hover' ? 48 : 32,
          height: cursorVariant === 'card' ? 72 : cursorVariant === 'hover' ? 48 : 32,
          scale: cursorVariant === 'card' ? 1.1 : cursorVariant === 'hover' ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      >
        {cursorText && (
          <span className="select-none animate-pulse uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#8C2424] pointer-events-none shadow-sm"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: cursorVariant === 'hover' || cursorVariant === 'card' ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 450,
          mass: 0.2,
        }}
      />
    </div>
  );
}
