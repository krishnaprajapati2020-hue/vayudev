// Ultra-lightweight native smooth scrolling with zero dependencies and zero CPU overhead.
// Respects user accessibility preferences (prefers-reduced-motion).

export function initSmoothScroll(): () => void {
  // No persistent event listeners or RAF loops needed for native scrolling
  return () => {};
}

export function scrollToTarget(
  target: string | number | HTMLElement,
  _options?: { offset?: number; duration?: number; onComplete?: () => void }
): void {
  if (typeof window === 'undefined') return;

  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  const behavior: ScrollBehavior = prefersReduced ? 'auto' : 'smooth';

  if (typeof target === 'string') {
    const id = target.startsWith('#') ? target.slice(1) : target;
    const element = document.getElementById(id) || document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior, block: 'start' });
    }
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior });
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior, block: 'start' });
  }

  if (_options?.onComplete) {
    // If a callback is provided, invoke it safely
    setTimeout(_options.onComplete, 500);
  }
}
