/**
 * Ambient Cursor Glow Effect
 * Features:
 * - Fluid requestAnimationFrame pointer tracking
 * - Safe fallback for mobile / touch devices (soft floating aura)
 * - Zero layout thrashing & hardware accelerated
 * - Automatically respects prefers-reduced-motion
 */
export function initCursorGlow(): void {
  const glow = document.getElementById('cursor-ambient-glow');
  if (!glow) return;

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReducedMotion) {
    glow.style.display = 'none';
    return;
  }

  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  if (isTouch) {
    // Ambient breathing aura on mobile
    glow.classList.add('mobile-ambient-breath');
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 3;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  const onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      glow.style.opacity = '1';
    }
  };

  const update = () => {
    // Smooth lerp (linear interpolation)
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    glow.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
    requestAnimationFrame(update);
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });
  requestAnimationFrame(update);
}
