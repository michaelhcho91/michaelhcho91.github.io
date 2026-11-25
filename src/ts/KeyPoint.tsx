const MARK = "<mark>";

const KeyPoint = ({ point }: { point: string }) => {
  let segments = null;
  if (point.includes(MARK)) {
    segments = point.split(MARK);
  }

  let newPoint = null;
  if (segments) {
    newPoint = (
      <>
        {segments[0]}
        <mark>{segments[1]}</mark>
        {segments[2]}
      </>
    );
  }

  return <li>{newPoint || point}</li>;
};

export default KeyPoint;
