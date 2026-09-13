import { motion } from 'motion/react';

interface InteractiveTickerProps {
  items?: string[];
  direction?: 'left' | 'right';
  speed?: number;
  bg?: string;
  textColor?: string;
  variant?: 'skills' | 'stats';
}

const STATS_ITEMS = [
  '120+ WEBSITES DELIVERED',
  '99.8% DEFECT-FREE QA RATE',
  '100/100 LIGHTHOUSE SPEED',
  '2.5+ YEARS PROFESSIONAL CRAFT',
  'HEALTHCARE • E-COMMERCE • FINTECH',
  'CROSS-BROWSER MATRIX VERIFIED',
  'WCAG AA ACCESSIBILITY AUDITED',
];

const SKILLS_ITEMS = [
  'WORDPRESS CMS LEAD',
  'ZERO DEFECT QA PIPELINES',
  'CUSTOM ELEMENTOR PRO',
  'CORE WEB VITALS 95+',
  'WOOCOMMERCE ARCHITECT',
  'PHP & MYSQL SCALING',
  'SAVIT INTERACTIVE',
  'FRONTEND UI/UX PRECISION',
];

export default function InteractiveTicker({
  items,
  direction = 'left',
  speed = 25,
  bg = 'bg-[#8C2424]',
  textColor = 'text-white',
  variant = 'skills',
}: InteractiveTickerProps) {
  const activeItems = items || (variant === 'stats' ? STATS_ITEMS : SKILLS_ITEMS);
  // Repeat items for seamless infinite scroll
  const duplicated = [...activeItems, ...activeItems, ...activeItems];

  return (
    <div
      className={`relative w-full overflow-hidden py-3.5 ${bg} select-none border-y border-stone-800/20`}
      data-cursor="SCROLL"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed,
        }}
      >
        {duplicated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span
              className={`font-display text-sm sm:text-base uppercase tracking-widest font-bold ${textColor}`}
            >
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5C451]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
