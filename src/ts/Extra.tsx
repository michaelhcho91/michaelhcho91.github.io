import Logo from "./Logo";
import IconLabel from "./IconLabel";
import KeyPoint from "./KeyPoint";

type ExtraType = {
  name: string;
  school: string;
  logo: string;
  duration: string;
  position: string;
  keyPoints: string[];
};

const Extra = ({ item }: { item: ExtraType }) => {
  const { name, school, logo, duration, position, keyPoints } = item;

  return (
    <li className="extra item">
      <Logo logo={logo} alt={name} />

      <div className="details">
        <IconLabel icon="user" label={position} mark />
        <IconLabel icon="users" label={name} />
        <IconLabel icon="university" label={school} />
        <IconLabel icon="calendar" label={duration} />
      </div>

      <ul className="key-points">
        {keyPoints.map((point, idx) => {
          return <KeyPoint key={idx + point[idx]} point={point} />;
        })}
      </ul>
    </li>
  );
};

export default Extra;
