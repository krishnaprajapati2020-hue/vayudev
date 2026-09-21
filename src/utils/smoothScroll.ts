import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') return () => {};

  // If already initialized, return cleanup
  if (lenisInstance) {
    return () => {
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }

  // Create Lenis instance with silky smooth easing
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.2,
    wheelMultiplier: 0.95,
    autoRaf: false, // We'll manage RAF to ensure smooth frame sync
  });

  lenisInstance = lenis;

  // Global reference for easy access
  (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

  let rafId: number;
  function raf(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    lenisInstance = null;
    delete (window as unknown as { __lenis?: Lenis }).__lenis;
  };
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollToTarget(
  target: string | number | HTMLElement,
  options?: { offset?: number; duration?: number; onComplete?: () => void }
): void {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration: options?.duration,
      onComplete: options?.onComplete,
    });
    return;
  }

  // Fallback to native smooth scroll
  if (typeof target === 'string') {
    const el = document.querySelector(target) || document.getElementById(target.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
