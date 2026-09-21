import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  Check,
  Phone,
  Mail,
  Copy,
  UserCheck,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Clock,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import EyeTrackingBackground from './EyeTrackingBackground';
import { scrollToTarget } from '../utils/smoothScroll';

export default function ContactSection() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Full-time Opportunity',
    message: '',
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const scrollToSection = (id: string) => {
    scrollToTarget('#' + id, { duration: 1.2 });
  };

  return (
    <section
      id="contact"
      className="footer footer-studio relative min-h-screen bg-[#8C2424] flex flex-col justify-between py-10 sm:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden"
      aria-label="Contact & Thank You"
    >
      {/* 
        1st Child: Center 3D Eye-Tracking Model Stage inside #EFECE6 Circular Pedestal
        The section background remains #8C2424, but the model sits on an elegant #EFECE6 circle
      */}
      <div className="model-stage relative z-10 flex flex-col items-center justify-center pointer-events-none order-2 my-6 lg:my-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        {/* Concentric Decorative Rings matching portfolio geometry */}
        <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] xl:w-[540px] xl:h-[540px] 2xl:w-[580px] 2xl:h-[580px] max-w-[92vw] max-h-[92vw] rounded-full border border-[#EFECE6]/15 pointer-events-none" />
        <div className="absolute w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] lg:w-[410px] lg:h-[410px] xl:w-[480px] xl:h-[480px] 2xl:w-[520px] 2xl:h-[520px] max-w-[86vw] max-h-[86vw] rounded-full border border-dashed border-[#F5C451]/25 pointer-events-none" />
        <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[460px] max-w-[78vw] max-h-[78vw] rounded-full bg-[#EFECE6]/10 blur-2xl pointer-events-none" />

        {/* The #EFECE6 Circle Container housing the 3D character */}
        <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[310px] lg:h-[310px] xl:w-[390px] xl:h-[390px] 2xl:w-[440px] 2xl:h-[440px] rounded-full bg-[#EFECE6] border-4 sm:border-8 border-[#EFECE6] shadow-[0_25px_60px_rgba(0,0,0,0.5)] ring-4 sm:ring-8 ring-[#EFECE6]/20 ring-offset-4 ring-offset-[#8C2424] overflow-hidden pointer-events-auto select-none">
          {/* Eye-Tracking Interactive Video (pristine original colors, uncorrupted by colorkey) */}
          <EyeTrackingBackground
            videoSrc="/footer-scrub.mp4"
            className="w-full h-full"
          />

          {/* Soft inner vignette to nest character naturally inside the circle */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_25px_rgba(0,0,0,0.06)] pointer-events-none" />
        </div>
      </div>

      {/* 
        2nd Child: Top Center "THANK YOU" Banner
      */}
      <div className="thank-you-banner text-center relative z-20 pt-2 mb-2 lg:mb-0 order-1" role="banner">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/40 border border-[#F5C451]/30 backdrop-blur-md mb-2">
          <Sparkles className="w-3 h-3 text-[#F5C451]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#F5C451] font-semibold">
            PORTFOLIO CONCLUSION
          </span>
          <Sparkles className="w-3 h-3 text-[#F5C451]" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider text-[#F5C451] uppercase drop-shadow-md">
          THANK YOU
        </h2>
        <span className="font-script text-2xl sm:text-3xl lg:text-4xl text-[#F5C451] block -mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          for stopping by
        </span>
      </div>

      {/* 
        3rd Child: Krishna Prajapati's Developer Identity & Quick Navigation Card
      */}
      <div className="jobs z-20 w-full max-w-lg lg:w-[300px] xl:w-[360px] 2xl:w-[410px] bg-[#721C1C]/90 backdrop-blur-xl border border-[#F5C451]/35 rounded-3xl p-5 sm:p-7 shadow-2xl transition-all hover:border-[#F5C451]/55 lg:absolute lg:left-4 xl:left-8 2xl:left-14 lg:top-1/2 lg:-translate-y-1/2 order-3 my-3 mx-auto lg:my-0">
        {/* Status Header */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="tag inline-flex items-center gap-2 rounded-full bg-black/50 border border-[#F5C451]/40 px-3 py-1 text-xs font-mono text-[#F5C451]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>open for senior roles</span>
          </span>
          <span className="text-[10px] font-mono text-[#EFECE6]/60 uppercase tracking-wider">
            Lead QA / Dev
          </span>
        </div>

        {/* Name & Title */}
        <div className="headline job-title mb-2">
          <h3 className="font-display text-2xl sm:text-3xl text-[#EFECE6] font-bold leading-tight">
            Krishna <span className="text-[#F5C451]">Prajapati</span>
          </h3>
        </div>

        <p className="text-xs sm:text-sm font-mono text-[#EFECE6]/85 leading-relaxed mb-5">
          Quality Assurance Lead & Senior WordPress Developer in Mumbai, India. 120+ live client websites delivered with zero defects.
        </p>

        {/* Portfolio Section Navigation Links */}
        <div className="footer-nav space-y-1.5 pt-2 border-t border-white/10">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5C451]/70 block mb-1">
            Section Navigation
          </span>
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-[#F5C451]/15 hover:text-[#F5C451] text-xs font-mono text-[#EFECE6] transition-all cursor-pointer group"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C451] group-hover:scale-125 transition-transform" />
              <span>Selected Projects (120+ Accounts)</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('experience')}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-[#F5C451]/15 hover:text-[#F5C451] text-xs font-mono text-[#EFECE6] transition-all cursor-pointer group"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C451] group-hover:scale-125 transition-transform" />
              <span>Experience & QA Leadership</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('skills')}
            className="w-full flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-[#F5C451]/15 hover:text-[#F5C451] text-xs font-mono text-[#EFECE6] transition-all cursor-pointer group"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5C451] group-hover:scale-125 transition-transform" />
              <span>Core Stack & Architecture</span>
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>

      {/* 
        4th Child: Krishna Prajapati's Direct Contact Information Card
      */}
      <div className="contact z-20 w-full max-w-lg lg:w-[300px] xl:w-[360px] 2xl:w-[410px] bg-[#721C1C]/90 backdrop-blur-xl border border-[#F5C451]/35 rounded-3xl p-5 sm:p-7 shadow-2xl transition-all hover:border-[#F5C451]/55 lg:absolute lg:right-4 xl:right-8 2xl:right-14 lg:top-1/2 lg:-translate-y-1/2 order-4 my-3 mx-auto lg:my-0">
        {/* Header Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <button
            type="button"
            onClick={() => setShowDrawer(true)}
            className="tag cursor-pointer hover:border-[#F5C451] hover:bg-black/70 transition-all active:scale-95 inline-flex items-center gap-1.5 rounded-full bg-black/50 border border-[#F5C451]/40 px-3 py-1 text-xs font-mono text-[#F5C451]"
          >
            <span>send a direct note</span>
            <Sparkles className="w-3 h-3 text-[#F5C451]" />
          </button>
          <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
            <Clock className="w-3 h-3" />
            &lt;4h response
          </span>
        </div>

        {/* Heading */}
        <div className="headline contact-links mb-3">
          <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            <span className="text-[#EFECE6] block">Let’s connect!</span>
            <span className="text-[#F5C451] block">Get in touch</span>
          </h3>
        </div>

        {/* Direct Contact Channels */}
        <div className="space-y-2 text-xs font-mono text-[#EFECE6] mb-4">
          {/* Email */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-[#F5C451]/20 hover:border-[#F5C451]/40 transition-colors">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#F5C451] transition-colors flex items-center gap-2.5 truncate max-w-[220px]"
            >
              <div className="w-7 h-7 rounded-lg bg-[#F5C451]/15 flex items-center justify-center text-[#F5C451] shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="truncate">
                <span className="block text-[9px] text-[#EFECE6]/50 uppercase">Email</span>
                <span className="truncate block font-semibold text-xs">{PERSONAL_INFO.email}</span>
              </div>
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy Email"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#F5C451] hover:text-black text-[#F5C451] transition-colors cursor-pointer shrink-0 ml-2"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone & WhatsApp */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/30 border border-[#F5C451]/20 hover:border-[#F5C451]/40 transition-colors">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="hover:text-[#F5C451] transition-colors flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-[#F5C451]/15 flex items-center justify-center text-[#F5C451] shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] text-[#EFECE6]/50 uppercase">Phone & WhatsApp</span>
                <span className="font-semibold block text-xs">{PERSONAL_INFO.phone}</span>
              </div>
            </a>
            <button
              onClick={handleCopyPhone}
              title="Copy Phone"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-[#F5C451] hover:text-black text-[#F5C451] transition-colors cursor-pointer shrink-0 ml-2"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Compose Direct Message Button */}
        <button
          type="button"
          onClick={() => setShowDrawer(true)}
          className="w-full py-2.5 px-4 mb-4 rounded-xl bg-[#F5C451] hover:bg-[#e6b33b] text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <span>Compose Direct Message</span>
          <Send className="w-3.5 h-3.5" />
        </button>

        {/* Social Links Bar */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#EFECE6]/60 uppercase tracking-wider">
            Online Presence
          </span>
          <div className="socials flex items-center gap-2">
            <a
              href="https://linkedin.com/in/kri5hna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile — Krishna Prajapati"
              className="w-8 h-8 rounded-full bg-black/40 border border-[#F5C451]/30 hover:border-[#F5C451] hover:bg-[#F5C451]/20 flex items-center justify-center text-[#F5C451] transition-all"
            >
              <img src="/linkedin.svg" alt="LinkedIn" width="16" height="16" />
            </a>
            <a
              href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Direct"
              title="Chat on WhatsApp"
              className="w-8 h-8 rounded-full bg-black/40 border border-[#F5C451]/30 hover:border-[#F5C451] hover:bg-[#F5C451]/20 flex items-center justify-center text-[#F5C451] transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Direct Email"
              title="Send Direct Email"
              className="w-8 h-8 rounded-full bg-black/40 border border-[#F5C451]/30 hover:border-[#F5C451] hover:bg-[#F5C451]/20 flex items-center justify-center text-[#F5C451] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://vayudev.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Website"
              title="Portfolio (vayudev.in)"
              className="w-8 h-8 rounded-full bg-black/40 border border-[#F5C451]/30 hover:border-[#F5C451] hover:bg-[#F5C451]/20 flex items-center justify-center text-[#F5C451] transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 5th Child: Bottom Signature Caption */}
      <div className="bottom-caption relative z-20 text-center w-full pt-6 lg:pt-0 lg:absolute lg:bottom-4 lg:left-0 lg:right-0 pointer-events-none px-4 order-5">
        <p className="text-xs font-mono tracking-widest uppercase text-[#F5C451]/90">
          © {new Date().getFullYear()} Krishna Prajapati • Senior WordPress Developer & QA Lead • Mumbai, India
        </p>
      </div>

      {/* 
        Slide-over Elegant Contact Drawer:
        Opens smoothly when user clicks "Send a direct note"
      */}
      <AnimatePresence>
        {showDrawer && (
          <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDrawer(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative z-10 w-full max-w-md h-full bg-[#141414]/95 border-l border-[#F5C451]/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-y-auto text-[#EFECE6]"
              data-lenis-prevent="true"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5C451] animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-[#F5C451] font-bold">
                      Direct Connection
                    </span>
                  </div>
                  <button
                    onClick={() => setShowDrawer(false)}
                    className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Direct Channels */}
                <div className="space-y-3 mb-6">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono">
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="flex items-center gap-2.5 text-[#EFECE6] hover:text-[#F5C451] transition-colors"
                    >
                      <div className="h-7 w-7 rounded-lg bg-[#F5C451]/15 flex items-center justify-center text-[#F5C451] shrink-0">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-white/50">Phone & WhatsApp</span>
                        <span className="font-semibold text-xs">{PERSONAL_INFO.phone}</span>
                      </div>
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#EFECE6] transition-colors cursor-pointer"
                    >
                      {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-2.5 text-[#EFECE6] hover:text-[#F5C451] transition-colors"
                    >
                      <div className="h-7 w-7 rounded-lg bg-[#F5C451]/15 flex items-center justify-center text-[#F5C451] shrink-0">
                        <Mail className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-white/50">Email Address</span>
                        <span className="font-semibold text-xs truncate max-w-[170px] block">
                          {PERSONAL_INFO.email}
                        </span>
                      </div>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#EFECE6] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/kri5hna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-[#EFECE6] hover:bg-white/[0.1] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg bg-[#F5C451]/15 flex items-center justify-center text-[#F5C451] shrink-0">
                        <UserCheck className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <span className="block text-[10px] text-white/50">LinkedIn</span>
                        <span className="font-semibold text-xs">linkedin.com/in/kri5hna</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/60 group-hover:text-[#F5C451] transition-colors" />
                  </a>
                </div>

                {/* Send Message Form */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl text-white tracking-wider uppercase">
                      Send a Quick Note
                    </h3>
                    <Sparkles className="h-4 w-4 text-[#F5C451]" />
                  </div>

                  {formSubmitted ? (
                    <div className="rounded-2xl bg-emerald-950/50 border border-emerald-500/30 p-5 text-center my-4">
                      <Check className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">Message Sent!</h4>
                      <p className="text-xs text-[#EFECE6]/80 font-mono">
                        Thank you, {formData.name || 'there'}. I will reply shortly.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', inquiryType: 'Full-time Opportunity', message: '' });
                        }}
                        className="mt-4 px-4 py-1.5 rounded-full bg-[#F5C451] text-stone-950 text-xs font-semibold uppercase"
                      >
                        Send Another Note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-mono font-semibold text-[#F5C451] mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-3.5 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5C451]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold text-[#F5C451] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-3.5 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5C451]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold text-[#F5C451] mb-1">
                          Topic
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full rounded-xl bg-stone-900 border border-white/15 px-3.5 py-2 text-xs text-[#EFECE6] focus:outline-none focus:border-[#F5C451]"
                        >
                          <option value="Full-time Opportunity">Full-time Senior Developer / QA Lead</option>
                          <option value="WordPress Architecture & Speed">WordPress Architecture & Speed</option>
                          <option value="General Collaboration">General Collaboration</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono font-semibold text-[#F5C451] mb-1">
                          Message *
                        </label>
                        <textarea
                          rows={3}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we collaborate?"
                          className="w-full rounded-xl bg-white/[0.06] border border-white/15 px-3.5 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#F5C451] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-full bg-[#F5C451] text-stone-950 font-bold text-xs uppercase tracking-wider py-3 px-6 hover:bg-[#e4b23d] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? <span>Sending...</span> : (
                          <>
                            <span>Submit Note</span>
                            <Send className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <p className="text-[10px] font-mono text-[#F5C451]/80 text-center mt-6">
                Direct to <span className="font-semibold">{PERSONAL_INFO.email}</span>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
