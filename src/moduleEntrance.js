export function observeModuleEntrance(selector) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const elements = [...document.querySelectorAll(selector)];
  const reveal = (element) => {
    element.classList.remove('entrance-pending');
    element.classList.add('entrance-playing');
    observer.unobserve(element);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });
  const finish = event => {
    if (event.animationName === 'module-suction') event.target.classList.remove('entrance-playing');
  };
  const focus = event => {
    const element = event.target.closest('.entrance-pending');
    if (element) reveal(element);
  };
  const disable = () => {
    if (motion.matches) {
      observer.disconnect();
      elements.forEach(el => el.classList.remove('entrance-pending', 'entrance-playing'));
    }
  };
  elements.forEach(el => {
    const siblings = [...el.parentElement.children].filter(child => elements.includes(child));
    el.style.setProperty('--entrance-delay', `${Math.min(siblings.indexOf(el), 3) * 180}ms`);
    el.classList.add('entrance-pending');
    observer.observe(el);
  });
  document.addEventListener('animationend', finish);
  document.addEventListener('focusin', focus);
  motion.addEventListener('change', disable);
  return () => {
    observer.disconnect();
    document.removeEventListener('animationend', finish);
    document.removeEventListener('focusin', focus);
    motion.removeEventListener('change', disable);
    elements.forEach(el => {
      el.classList.remove('entrance-pending', 'entrance-playing');
      el.style.removeProperty('--entrance-delay');
    });
  };
}
