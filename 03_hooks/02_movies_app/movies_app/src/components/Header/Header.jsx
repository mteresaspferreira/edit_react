import "./styles.css";
import UserImage from "./UserImage/UserImage";
import UserName from "./UserName/UserName";

const Header = (props) => {
  return (
    <header>
      <div className="header-left">
        <UserName userName={props.userName} />
      </div>
      <UserImage />
    </header>
  );
};

export default Header;
