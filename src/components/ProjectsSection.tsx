import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import { PROJECTS, LIVE_WEBSITES_DIRECTORY } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import LiveSitePreview from './LiveSitePreview';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'wordpress' | 'landing' | 'directory'>('all');
  const [activeProjectPage, setActiveProjectPage] = useState<{ [key: string]: string }>({});

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'wordpress') return p.category === 'WordPress';
    if (activeTab === 'landing') return p.category === 'Landing Page';
    return true;
  });

  const allLiveSites = [
    ...LIVE_WEBSITES_DIRECTORY.businessAndCorporate.map((s) => ({ ...s, category: 'Healthcare & Corporate' })),
    ...LIVE_WEBSITES_DIRECTORY.realEstate.map((s) => ({ ...s, category: 'Real Estate' })),
    ...LIVE_WEBSITES_DIRECTORY.landingPages.map((s) => ({ ...s, category: 'Landing Page' })),
    ...LIVE_WEBSITES_DIRECTORY.ecommerce.map((s) => ({ ...s, category: 'E-Commerce' })),
  ];

  return (
    <section id="projects" className="relative w-full bg-[#F5F3EF] py-20 md:py-28 px-4 sm:px-8 border-t border-stone-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
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
              05 • Selected Case Studies & Production Deployments
            </span>
          </div>
          <span className="text-base font-mono font-bold text-stone-400">05</span>
        </motion.div>

        {/* Title & Introduction */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-script text-4xl sm:text-5xl text-[#8C2424] block -mb-2 transform -rotate-1 select-none">
              Featured
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8C2424] tracking-tight leading-none uppercase">
              SELECTED PROJECTS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
              Enterprise WordPress ecosystems, bespoke booking engines, high-converting real estate portals, and 120+ client deployments engineered for speed, responsiveness, and zero defects.
            </p>
          </div>

          {/* Interactive Navigation Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-stone-200/70 p-1.5 rounded-2xl sm:rounded-full border border-stone-300/80 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'wordpress', label: 'WordPress & QA' },
              { id: 'landing', label: 'Landing Pages' },
              { id: 'directory', label: 'Live Sites (12+)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#8C2424] text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-stone-300/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT VIEW 1: FEATURED CASE STUDIES */}
        {activeTab !== 'directory' && (
          <div className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-3xl bg-[#FAF8F5] border border-stone-300 p-4 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Direct Desktop Live Website Viewport */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                      {/* Top Preview Status - Mentioned Once Cleanly */}
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300/60 shadow-2xs">
                            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                            <span>Live Production Site</span>
                          </span>
                        </div>
                      </div>

                      {/* Desktop Live Website Viewport */}
                      <LiveSitePreview
                        project={project}
                        initialTab={activeProjectPage[project.id] || (project.livePages?.[0]?.key ?? 'home')}
                        heightClass="h-[360px] sm:h-[440px] lg:h-[480px]"
                      />

                      {/* Interactive Page Navigation Pills */}
                      {project.livePages && project.livePages.length > 1 && (
                        <div className="flex items-center gap-2 overflow-x-auto py-1 px-0.5 scrollbar-thin">
                          <span className="text-[11px] font-mono text-stone-500 shrink-0 uppercase tracking-wider font-semibold">
                            Pages:
                          </span>
                          {project.livePages.map((page) => {
                            const isCurrent = (activeProjectPage[project.id] || project.livePages![0].key) === page.key;
                            return (
                              <button
                                key={page.key}
                                onClick={() =>
                                  setActiveProjectPage((prev) => ({
                                    ...prev,
                                    [project.id]: page.key,
                                  }))
                                }
                                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer border ${
                                  isCurrent
                                    ? 'bg-[#8C2424] text-white border-[#8C2424] shadow-xs font-semibold'
                                    : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100 hover:border-stone-400'
                                }`}
                              >
                                {page.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Right Column: Case Study Data & Impact */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div>
                        {/* Order & Category Badges */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C2424] bg-[#8C2424]/10 px-3 py-1 rounded-full">
                            Case Study 0{index + 1} • {project.category}
                          </span>
                          <span className="text-xs font-mono text-stone-500 font-medium">
                            {project.year}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="font-display text-3xl sm:text-4xl text-stone-900 tracking-tight leading-tight uppercase mb-1">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-stone-500 uppercase tracking-wide mb-4">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-stone-600 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key Metrics Banner */}
                        <div className="grid grid-cols-2 gap-2.5 mb-6">
                          {project.metrics.slice(0, 4).map((m, i) => (
                            <div key={i} className="rounded-xl bg-stone-100 p-2.5 border border-stone-200">
                              <span className="font-display text-xl sm:text-2xl text-[#8C2424] block leading-none">
                                {m.value}
                              </span>
                              <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block mt-0.5 truncate">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md bg-stone-100 px-2.5 py-1 text-[11px] font-mono font-medium text-stone-700 border border-stone-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-stone-200">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#8C2424] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#6e1c1c] transition-all shadow-sm cursor-pointer"
                        >
                          <span>Visit Production Site</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-100 border border-stone-300 transition-all shadow-2xs cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5 text-[#8C2424]" />
                          <span>Detailed Specs</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CONTENT VIEW 2: VERIFIED LIVE CLIENT DIRECTORY GRID */}
        {(activeTab === 'directory' || activeTab === 'all') && (
          <div className="mt-16 pt-16 border-t border-stone-300">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
              <div>
                <span className="font-script text-3xl sm:text-4xl text-[#8C2424] block -mb-1 transform -rotate-1 select-none">
                  Verified Production
                </span>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-stone-900 tracking-tight leading-none uppercase">
                  LIVE CLIENT DIRECTORY
                </h3>
                <p className="text-xs sm:text-sm font-mono text-stone-500 mt-1">
                  Direct production links from 120+ managed client accounts across North America and India.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full self-start">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span>All Sites Live & Tested</span>
              </div>
            </div>

            {/* Grid of Verified Client Accounts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allLiveSites.map((site, idx) => (
                <motion.a
                  key={idx}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex flex-col justify-between p-4 rounded-2xl bg-white border border-stone-300 hover:border-[#8C2424] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                        {site.category}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 group-hover:text-[#8C2424] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900 group-hover:text-[#8C2424] transition-colors line-clamp-1">
                      {site.title}
                    </h4>
                  </div>
                  
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span className="truncate max-w-[170px]">{site.url.replace(/^https?:\/\//, '')}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
