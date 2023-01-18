const Icon = (props) => {
  return (
    <img
      src={`/src/assets/icons/${props.name}.svg`}
      height={props.height}
      style={{ color: props.color }}
    ></img>
  );
};

export default Icon;
