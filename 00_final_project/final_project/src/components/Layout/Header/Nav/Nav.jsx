//css
import "./styles.scss";
//react
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
      <Link to="/shop">Shop</Link>
      <Link to="/fabric">Fabric</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Nav;
