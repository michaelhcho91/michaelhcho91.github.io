import type { ReactNode } from "react";

const IconLabel = ({
  icon,
  label,
  mark = false,
}: {
  icon: string;
  label: string | ReactNode;
  mark?: boolean;
}) => {
  if (mark) {
    label = <mark>{label}</mark>;
  }

  return (
    <div className="icon-label">
      <i className={`fa fa-${icon}`} />
      <span>{label}</span>
    </div>
  );
};

export default IconLabel;
