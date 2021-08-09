export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

export const getLogoPath = (name) => {
  if (name) {
    return `${process.env.PUBLIC_URL}/logos/${name}-sm.png`;
  }

  return '';
};

export const initObserver = (document) => {
  const markers = [...document.querySelectorAll('mark')];

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });
  
  markers.forEach(mark => {
    observer.observe(mark);
  });
};