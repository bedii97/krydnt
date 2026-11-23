/**
 * Intersection Observer Scroll Reveal
 * Staggers items smoothly as they enter viewport
 */
export function initScrollReveal(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-item').forEach((el) => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.reveal-item').forEach((el) => {
    observer.observe(el);
  });
}
