/**
 * Cryptographic Character Scramble Effect
 * Resolves random cyber/matrix glyphs into final text
 */
const CHARS = '01!<>-_\\/[]{}—=+*^?#XYZ$@';

export function scrambleElement(element: HTMLElement, targetText?: string, speed: number = 30): Promise<void> {
  return new Promise((resolve) => {
    const final = targetText || element.getAttribute('data-scramble') || element.innerText.trim();
    const length = final.length;
    let iteration = 0;
    const maxIterations = length * 3;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.innerText = final;
      resolve();
      return;
    }

    const interval = setInterval(() => {
      element.innerText = final
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 3) {
            return final[index];
          }
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');

      if (iteration >= maxIterations) {
        clearInterval(interval);
        element.innerText = final;
        resolve();
      }
      iteration += 1;
    }, speed);
  });
}

export function initScrambleElements(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-scramble]');
  elements.forEach((el) => {
    // Initial scramble on view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrambleElement(el);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(el);

    // Re-trigger on hover or tap
    el.addEventListener('mouseenter', () => {
      scrambleElement(el);
    });
  });
}
