import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { scrollToTarget } from '../utils/smoothScroll';

export default function AboutSection() {
  const handleScrollTo = (id: string) => {
    scrollToTarget('#' + id, { duration: 1.2 });
  };

  return (
    <section id="about" className="relative w-full bg-[#FAF8F5] py-20 md:py-28 px-4 sm:px-8 border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-stone-300 pb-4 mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#8C2424]" />
            <span className="text-xs uppercase tracking-widest font-mono text-stone-600 font-semibold">
              02 • Professional Profile & Philosophy
            </span>
          </div>
          <span className="text-base font-mono font-bold text-stone-400">02</span>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[380px] sm:max-w-[440px] flex items-center justify-center"
            >
              <img
                src="/assets/exp%20image.webp"
                alt={PERSONAL_INFO.name}
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="lazy"
                decoding="async"
                width="440"
                height="440"
              />
            </motion.div>
          </div>

          {/* Right Column: Narrative & Core Expertise */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-script text-4xl sm:text-5xl text-[#8C2424] block -mb-2 transform -rotate-1 select-none">
                Meet
              </span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8C2424] tracking-tight leading-none uppercase break-words">
                KRISHNA PRAJAPATI
              </h2>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mt-3 mb-6">
                <span className="rounded-full bg-[#8C2424] text-white px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider">
                  Senior WordPress Developer
                </span>
                <span className="rounded-full bg-white text-stone-800 border border-stone-300 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider">
                  Quality Assurance Lead
                </span>
                <span className="rounded-full bg-stone-200 text-stone-700 px-3 py-1 text-xs font-mono font-medium">
                  MBA (Executive)
                </span>
              </div>

              {/* High-Impact Biography */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-8">
                Senior WordPress Developer and QA Lead with <strong>3+ years of agency experience</strong> driving end-to-end development, performance optimization, and rigorous testing for <strong>120+ client accounts</strong> across the US, Canada, and India. Renowned for overhauling agency QA workflows on ZiFlow—cutting review defects from <strong>150+ down to near-zero</strong>—while crafting pixel-perfect, mobile-first WordPress themes and dynamic web applications.
              </p>
            </motion.div>

            {/* Core Pillars List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5 mb-8"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Custom Theme & Plugin Mastery:</strong> Extensive architecture with Elementor Pro, ACF Pro, Gutenberg Blocks, and bespoke PHP hooks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Quality Assurance Excellence:</strong> Zero-defect standard across cross-browser environments (desktop, tablet, mobile), ensuring flawless production launches.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Full-Stack & Mobile Breadth:</strong> Built custom booking algorithms, WooCommerce checkout solutions, and published companion Android apps to Google Play.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => handleScrollTo('projects')}
                className="inline-flex items-center gap-2 rounded-full bg-[#8C2424] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#6e1c1c] transition-all shadow-md cursor-pointer"
              >
                <span>View Selected Projects</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-100 border border-stone-300 transition-all shadow-2xs cursor-pointer"
              >
                <span>Get In Touch</span>
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
