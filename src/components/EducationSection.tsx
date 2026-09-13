import { motion } from 'motion/react';
import { Calendar, GraduationCap, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function EducationSection() {
  const getIcon = (id: string) => {
    if (id === 'edu-1') return GraduationCap;
    if (id === 'edu-2') return BookOpen;
    return Sparkles;
  };

  return (
    <section id="education" className="relative w-full bg-[#FAF8F5] py-20 md:py-28 px-4 sm:px-8 border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
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
              04 • Academic Background & Credentials
            </span>
          </div>
          <span className="text-base font-mono font-bold text-stone-400">04</span>
        </motion.div>

        {/* Top Editorial Row: Photo on Left + Heading, Subheading & Narrative on Right (Matching About Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          
          {/* Left Column: Photo Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[380px] sm:max-w-[440px] flex items-center justify-center"
            >
              <img
                src="/assets/pic 2.webp"
                alt={PERSONAL_INFO.name}
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right Column: Heading, Subheading & Academic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-script text-4xl sm:text-5xl text-[#8C2424] block -mb-2 transform -rotate-1 select-none">
                My
              </span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8C2424] tracking-tight leading-none uppercase break-words">
                EDUCATION
              </h2>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2 mt-3 mb-6">
                <span className="rounded-full bg-[#8C2424] text-white px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider">
                  B.Sc. Information Technology
                </span>
                <span className="rounded-full bg-white text-stone-800 border border-stone-300 px-3.5 py-1 text-xs font-mono font-semibold uppercase tracking-wider">
                  Executive MBA (Pursuing)
                </span>
                <span className="rounded-full bg-stone-200 text-stone-700 px-3 py-1 text-xs font-mono font-medium">
                  University of Mumbai
                </span>
              </div>

              {/* High-Impact Academic Biography */}
              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal mb-8">
                Combining core computer science foundations with strategic business acumen. Grounded in a <strong>Bachelor of Science in Information Technology</strong> from the University of Mumbai, complemented by active <strong>Executive MBA</strong> management studies to deliver high-performing, scalable web architectures and rigorous QA leadership.
              </p>
            </motion.div>

            {/* Core Academic Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3.5"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Information Technology Foundations:</strong> Rigorous academic focus on software systems, database engineering, web application protocols, and object-oriented architectures.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Strategic Technology Management:</strong> Business studies bridging software engineering execution with business ROI, digital project management, and client account growth.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#8C2424] shrink-0 mt-0.5" />
                <p className="text-sm text-stone-700">
                  <strong className="text-stone-900 font-semibold">Agency-Proven Quality Standards:</strong> Applied academic principles directly into production workflows, eliminating defects and leading QA across 120+ client websites.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Section: Degree & Milestone Cards Placed Cleanly Below */}
        <div className="pt-8 border-t border-stone-300">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#8C2424]" />
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-600 font-semibold">
                Degrees & Qualifications
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-400">3 Milestones</span>
          </div>

          {/* 3-Column Responsive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_LIST.map((edu, idx) => {
              const ItemIcon = getIcon(edu.id);

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="h-full"
                >
                  <SpotlightCard dataCursor="DEGREE" className="h-full rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        {/* Header Row: Icon and Period Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#8C2424]/10 border border-[#8C2424]/20 flex items-center justify-center text-[#8C2424] shrink-0">
                            <ItemIcon className="h-5 w-5" />
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-stone-50 px-3 py-1 text-xs font-mono font-semibold text-[#8C2424] shadow-2xs shrink-0">
                            <Calendar className="h-3 w-3 text-[#8C2424]" />
                            {edu.period}
                          </span>
                        </div>

                        {/* Degree Title */}
                        <h4 className="text-lg font-bold text-stone-900 font-sans tracking-tight leading-snug mb-2">
                          {edu.degree}
                        </h4>

                        {/* Sub-Header: Institution & Honors / Status Tag */}
                        <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono">
                          <span className="text-stone-700 font-semibold">
                            {edu.institution}
                          </span>
                          {edu.honors && (
                            <>
                              <span className="text-stone-300">•</span>
                              <span className="inline-flex items-center text-[11px] font-mono text-[#8C2424] bg-[#8C2424]/10 px-2.5 py-0.5 rounded-full font-semibold">
                                {edu.honors}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
