import Logo from "./Logo";
import IconLabel from "./IconLabel";

type SchoolType = {
  school: string;
  graduated: string;
  description: string;
  logo: string;
  attended: string;
};

const School = ({ item }: { item: SchoolType }) => {
  const { school, graduated, description, logo, attended } = item;

  return (
    <li className="school item">
      <Logo logo={logo} alt={school} />

      <div className="details">
        <IconLabel icon="university" label={school} mark />
        {graduated && <IconLabel icon="graduation-cap" label={graduated} />}
        {attended && <IconLabel icon="pencil" label={attended} />}
        {description && <IconLabel icon="certificate" label={description} />}
      </div>
    </li>
  );
};

export default School;
