import { scrollToTop } from "./utils";

const Header = () => {
  const renderLink = (href: string, label: string, icon: string) => {
    const attributes = {
      href,
      rel: "noreferrer",
      target: "",
    };

    if (icon !== "phone") {
      attributes.target = "_blank";
    }

    // todo: use font awesome
    let iconEl = <i className={`fa fa-${icon}`} />;
    if (icon === "linkedin") {
      iconEl = <i className="devicon-linkedin-plain" />;
    }
    if (icon === "github") {
      iconEl = <i className="devicon-github-original" />;
    }

    return (
      <a {...attributes}>
        {label}
        {iconEl}
      </a>
    );
  };

  return (
    <header className="header-container">
      <div className="header auto-width">
        <div onClick={scrollToTop} className="name-and-title">
          <h1>Michael Cho</h1>
          <h2>Software Engineer</h2>
        </div>

        <div className="contact-and-pic">
          <div className="links">
            {renderLink("tel:7189860270", "718-986-0270", "phone")}
            {renderLink(
              "mailto: michaelhcho91@gmail.com",
              "michaelhcho91@gmail.com",
              "envelope",
            )}
            {renderLink(
              "https://www.linkedin.com/in/michaelhcho91",
              "linkedin.com/in/michaelhcho91",
              "linkedin",
            )}
            {renderLink(
              "https://github.com/michaelhcho91",
              "github.com/michaelhcho91",
              "github",
            )}
          </div>

          <img
            className="pic-of-me hidden-md"
            src={`me.png`}
            alt="Michael Cho"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
