import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Cpu,
  Layout,
  Palette,
  Server,
  Sparkles,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="h-3.5 w-3.5" />;
      case 'Server':
        return <Server className="h-3.5 w-3.5" />;
      case 'Cpu':
        return <Cpu className="h-3.5 w-3.5" />;
      case 'Palette':
        return <Palette className="h-3.5 w-3.5" />;
      default:
        return <Sparkles className="h-3.5 w-3.5" />;
    }
  };

  const currentCategoryObj = SKILL_CATEGORIES.find((c) => c.id === activeCategory);

  const displayedSkills = activeCategory === 'all'
    ? SKILL_CATEGORIES.flatMap((c) => c.skills.map((s) => ({ ...s, categoryName: c.name })))
    : currentCategoryObj?.skills.map((s) => ({ ...s, categoryName: currentCategoryObj.name })) || [];

  return (
    <section id="skills" className="relative w-full bg-[#EFECE6] py-24 md:py-32 px-4 sm:px-8 border-t border-stone-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-stone-300 pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#8C2424]" />
            <span className="text-xs uppercase tracking-widest font-mono text-stone-600 font-semibold">
              05 • Proficiencies & Tech Stack
            </span>
          </div>
          <span className="text-sm font-mono font-bold text-stone-400">05</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-script text-4xl sm:text-5xl text-[#8C2424] block -mb-2">
              Core
            </span>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#8C2424] tracking-tight leading-none uppercase">
              SKILLS & TOOLS
            </h2>
          </div>
          <p className="text-stone-700 max-w-md text-sm md:text-base leading-relaxed">
            Enterprise toolkit spanning custom WordPress theme & plugin engineering, Elementor Pro, PHP/MySQL architectures, and agency-grade QA automation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#8C2424] text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            All Disciplines ({SKILL_CATEGORIES.flatMap((c) => c.skills).length})
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#8C2424] text-white shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.name} ({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Category Context Banner if specific category is selected */}
        {currentCategoryObj && activeCategory !== 'all' && (
          <div className="mb-8 rounded-2xl bg-white/70 border border-stone-200 px-5 py-3.5 flex items-center gap-3 text-xs sm:text-sm text-stone-700 font-mono">
            <span className="h-2 w-2 rounded-full bg-[#8C2424] shrink-0" />
            <span>
              <strong className="text-stone-900">{currentCategoryObj.name}:</strong> {currentCategoryObj.description}
            </span>
          </div>
        )}

        {/* Redesigned Skills Grid with Hero-style Spotlight Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedSkills.map((skill, index) => (
            <SpotlightCard
              key={`${skill.name}-${index}`}
              dataCursor="SKILL"
              className="h-full group rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-[#8C2424]/40 transition-all duration-300"
            >
              <div className="h-full p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  {/* Top Row: Experience Badge & Core Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 border border-stone-200/80 px-2.5 py-1 text-xs font-mono font-semibold text-stone-700">
                      <Clock className="h-3 w-3 text-[#8C2424]" />
                      {skill.experience} Experience
                    </span>

                    {skill.isPrimary ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#8C2424]/10 text-[#8C2424] px-2.5 py-0.5 text-[11px] font-mono font-bold tracking-tight">
                        <CheckCircle2 className="h-3 w-3" />
                        Core Skill
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 text-stone-600 px-2 py-0.5 text-[11px] font-mono font-medium">
                        Specialized
                      </span>
                    )}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#8C2424] transition-colors leading-snug tracking-tight mb-2">
                    {skill.name}
                  </h3>
                </div>

                {/* Bottom Row: Category & Production Status */}
                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="truncate max-w-[170px] text-[11px] text-stone-500 font-medium">
                    {skill.categoryName}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Production Ready
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom Quality Callout */}
        <div className="mt-12 rounded-2xl bg-[#8C2424] p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#F5C451]" />
              <span className="text-xs uppercase tracking-widest font-mono text-[#F5C451] font-bold">
                Quality & Performance Standards
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display tracking-wide text-white">
              ZERO-DEFECT QA PIPELINES • 95+ PAGESPEED • 100% RESPONSIVE
            </h3>
            <p className="text-sm text-stone-200 max-w-2xl leading-relaxed">
              Every deliverable is engineered with semantic architecture, custom post type efficiency, clean hooks & filters, fluid responsive breakpoints, and strict pre-launch ZiFlow review gating.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:bg-stone-100 transition-colors shadow-sm"
          >
            Inquire For A Project
          </a>
        </div>
      </div>
    </section>
  );
}
