export const withPromotedLabel = (Card) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 rounded-sm shadow-sm">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};
