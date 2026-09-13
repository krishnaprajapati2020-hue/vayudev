import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  ArrowRight,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);

  const activeExp = EXPERIENCES.find((exp) => exp.id === selectedId) || EXPERIENCES[0];

  // Specific key achievements per role for concise, non-repetitive impact
  const roleHighlights: Record<string, { badge: string; accentColor: string; keyCallout: string; calloutIcon: typeof Award }> = {
    'exp-1': {
      badge: 'Current Leadership Role',
      accentColor: '#8C2424',
      keyCallout: 'Overhauled agency QA standards on ZiFlow, reducing pre-launch review comments from 150–180 down to near-zero defects; awarded "Rising Star of the Quarter" within 6 months.',
      calloutIcon: Award
    },
    'exp-2': {
      badge: 'Full-Lifecycle & Mobile',
      accentColor: '#B45309',
      keyCallout: 'Architected MyTourCapital booking platform with custom post types and independently developed & published the companion Android app to Google Play Store.',
      calloutIcon: Smartphone
    },
    'exp-3': {
      badge: 'Agency Performance & Growth',
      accentColor: '#047857',
      keyCallout: 'Built high-converting, SEO-optimized WordPress landing pages for premier real estate developers, driving a 70% increase in digital lead generation.',
      calloutIcon: TrendingUp
    }
  };

  return (
    <section id="experience" className="relative w-full bg-[#EFECE6] py-20 md:py-28 px-4 sm:px-8 border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-stone-300 pb-4 mb-10 md:mb-14"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-[#8C2424]" />
            <span className="text-xs uppercase tracking-widest font-mono text-stone-600 font-semibold">
              03 • Career Journey & Agency Leadership
            </span>
          </div>
          <span className="text-base font-mono font-bold text-stone-400">03</span>
        </motion.div>

        {/* Section Header with Script Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <span className="font-script text-4xl sm:text-5xl text-[#8C2424] block -mb-2 transform -rotate-1 select-none">
            My
          </span>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#8C2424] tracking-tight leading-none uppercase">
            EXPERIENCES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 max-w-2xl font-normal leading-relaxed">
            3+ years of professional agency craft delivering 120+ client portals, zero-defect QA leadership, and custom full-stack WordPress solutions.
          </p>
        </motion.div>

        {/* Interactive Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Timeline List & Key Metric Badges */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-1 px-1">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                Select Career Position
              </span>
              <span className="text-xs font-mono text-stone-500">
                {EXPERIENCES.length} Positions
              </span>
            </div>

            {EXPERIENCES.map((exp) => {
              const isSelected = selectedId === exp.id;
              const meta = roleHighlights[exp.id];

              return (
                <motion.button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full text-left p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer relative overflow-hidden border ${
                    isSelected
                      ? 'bg-white border-[#8C2424] shadow-md ring-2 ring-[#8C2424]/10'
                      : 'bg-white/70 border-stone-200 hover:bg-white hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeRoleBar"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#8C2424]"
                    />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8C2424] bg-[#8C2424]/10 px-2.5 py-0.5 rounded-full">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>

                    {meta?.badge && (
                      <span className="text-[11px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                        {meta.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-stone-900 font-sans tracking-tight leading-snug">
                    {exp.role}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-stone-600 font-medium">
                    <Building2 className="h-3.5 w-3.5 text-[#8C2424]" />
                    <span className="truncate">{exp.company}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-stone-100 text-xs font-mono text-stone-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                    <span className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                      isSelected ? 'text-[#8C2424]' : 'text-stone-400'
                    }`}>
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Detailed Spotlight Dossier */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <div key={activeExp.id}>
                <SpotlightCard dataCursor="DOSSIER" className="rounded-3xl bg-white border border-stone-300 shadow-md">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="p-7 sm:p-9"
                  >
                  {/* Dossier Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-stone-200">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#8C2424] bg-[#8C2424]/10 px-3 py-1 rounded-full">
                          <Calendar className="h-3.5 w-3.5" />
                          {activeExp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 font-mono text-xs text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                          <MapPin className="h-3 w-3" />
                          {activeExp.location}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tracking-tight leading-tight">
                        {activeExp.role}
                      </h3>

                      <div className="mt-1 flex items-center gap-2 text-base font-semibold text-[#8C2424]">
                        <Building2 className="h-4 w-4" />
                        <span>{activeExp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Scope Description */}
                  <div className="py-6 border-b border-stone-200">
                    <p className="text-base text-stone-700 leading-relaxed">
                      {activeExp.description}
                    </p>
                  </div>

                  {/* Key Milestone Callout */}
                  {roleHighlights[activeExp.id] && (
                    <div className="my-6 rounded-2xl bg-[#FAF8F5] p-5 border border-stone-200 flex items-start gap-3.5">
                      <Award className="h-6 w-6 text-[#8C2424] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-[#8C2424] font-bold mb-1">
                          Highlighted Achievement
                        </h4>
                        <p className="text-sm text-stone-800 font-medium leading-relaxed">
                          {roleHighlights[activeExp.id].keyCallout}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Responsibilities & Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mb-3.5">
                      Responsibilities & Deliverables:
                    </h4>
                    <ul className="space-y-3 text-sm text-stone-700">
                      {activeExp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-[#8C2424] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Stack */}
                  <div className="pt-6 border-t border-stone-200">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mb-3">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeExp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-stone-100 px-3.5 py-1 text-xs font-mono font-medium text-stone-700 border border-stone-200 hover:border-[#8C2424]/40 hover:text-[#8C2424] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SpotlightCard>
            </div>
          </AnimatePresence>
        </div>

        </div>
      </div>
    </section>
  );
}
