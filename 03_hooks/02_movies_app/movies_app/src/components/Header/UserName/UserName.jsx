import "./styles.css";

const UserName = (props) => {
  return (
    <>
      <div className="hello-message">
        <span>Hello</span> {props.userName}
      </div>
      <div className="general-message">
        <p>Let's watch today</p>
      </div>
    </>
  );
};

export default UserName;
