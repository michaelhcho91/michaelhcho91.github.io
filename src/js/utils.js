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