import { getLogoPath } from "./utils";

const Logo = ({ logo, alt }: { logo: string; alt: string }) => {
  const src = getLogoPath(logo);

  return <img className="logo" loading="lazy" src={src} alt={alt} />;
};

export default Logo;
