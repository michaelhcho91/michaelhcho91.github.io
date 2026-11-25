import Logo from "./Logo";
import IconLabel from "./IconLabel";
import KeyPoint from "./KeyPoint";

export type WorkItemType = {
  company: string;
  logo: string;
  start: string;
  end: string;
  location: string;
  position: string;
  keyPoints: string[];
};

const WorkItem = ({ item }: { item: WorkItemType }) => {
  const { company, logo, start, end, location, position, keyPoints } = item;
  const dateLabel = end ? `${start} - ${end}` : `${start} - Present`;

  return (
    <li className="work item">
      <Logo logo={logo} alt={company} />

      <div className="details">
        <IconLabel icon="user" label={position} mark />
        <IconLabel icon="building" label={company} />
        <IconLabel icon="map-marker" label={location} />
        <IconLabel icon="calendar" label={dateLabel} />
      </div>

      <ul className="key-points">
        {keyPoints.map((point, idx) => {
          return <KeyPoint key={idx + point[idx]} point={point} />;
        })}
      </ul>
    </li>
  );
};

export default WorkItem;
