const Input = (props) => {
  console.log(props);
  return <input type={props.type} onChange={props.OnChangeInput} />;
};

export default Input;
