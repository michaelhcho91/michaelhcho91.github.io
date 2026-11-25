export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const getLogoPath = (name: string) => {
  if (name) {
    return `logos/${name}-sm.png`;
  }

  return "";
};
