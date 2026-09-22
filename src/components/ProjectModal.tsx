import { useEffect } from 'react';
import { ArrowUpRight, Check, Github, X } from 'lucide-react';
import { Project } from '../types';
import LiveSitePreview from './LiveSitePreview';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#FAF8F5] p-4 sm:p-8 md:p-10 text-[#111111] shadow-2xl border border-stone-300 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-stone-200 text-stone-700 hover:bg-[#8C2424] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-12 sm:pr-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-script text-3xl text-[#8C2424]">
              {project.orderLabel}
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Project Case Study • {project.year}
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#8C2424] tracking-tight leading-tight break-words">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Direct Live Desktop Site Experience */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8C2424] font-bold">
                Live Production Site
              </span>
            </div>
          </div>

          <LiveSitePreview
            project={project}
            heightClass="h-[380px] sm:h-[460px] lg:h-[520px]"
          />
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-stone-200 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-3xl text-[#8C2424] leading-none">
                {m.value}
              </span>
              <span className="text-xs text-stone-500 font-mono mt-1">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Overview & Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-7">
            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mb-3">
              Project Overview & Problem Statement
            </h3>
            <p className="text-stone-800 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>

            <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mt-6 mb-3">
              Key Architecture & Deliverables
            </h3>
            <ul className="space-y-2">
              {project.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-stone-700">
                  <Check className="h-4 w-4 text-[#8C2424] shrink-0 mt-0.5" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="rounded-2xl bg-[#EFECE6] p-5 border border-stone-200">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#8C2424] font-bold mb-3">
                Project Metadata
              </h4>
              <div className="space-y-2.5 text-xs font-mono">
                <div>
                  <span className="text-stone-400 block">CLIENT</span>
                  <span className="font-semibold text-stone-900">{project.client}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">MY ROLE</span>
                  <span className="font-semibold text-stone-900">{project.role}</span>
                </div>
                <div>
                  <span className="text-stone-400 block">CATEGORY</span>
                  <span className="font-semibold text-stone-900">{project.category}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-500 font-bold mb-2">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-3 py-1 text-xs font-mono text-stone-700 border border-stone-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-stone-200">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#8C2424] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#721C1C] transition-colors"
              >
                <span>Live Demonstration</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:bg-stone-50 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-stone-500 hover:text-stone-900 underline underline-offset-4 cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
