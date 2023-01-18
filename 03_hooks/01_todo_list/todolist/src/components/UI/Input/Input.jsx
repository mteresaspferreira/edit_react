const Input = (props) => {
  console.log("props input text ", props);
  return <input type={props.type} onChange={props.OnChangeInput} />;
};

export default Input;
