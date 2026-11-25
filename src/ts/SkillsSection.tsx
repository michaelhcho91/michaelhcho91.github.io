import SkillIcon from "./SkillIcon";
import skills from "../resources/skills.json";

type Skill = {
  label: string;
  icon: string;
};

const SkillsSection = () => {
  const renderSkillIcon = (list: Skill[] = []) => {
    if (list.length) {
      return (
        <ul className="skills-list">
          {list.map(({ label, icon }) => {
            return <SkillIcon key={label} label={label} icon={icon} />;
          })}
        </ul>
      );
    }

    return null;
  };

  return (
    <section className="skills container">
      <div className="section auto-width">
        <h1>My Favorite Tools</h1>
        {renderSkillIcon(skills.favoritesIcons)}
        <h1>Also Enjoy Developing With</h1>
        {renderSkillIcon(skills.othersIcons)}
      </div>
    </section>
  );
};

export default SkillsSection;
