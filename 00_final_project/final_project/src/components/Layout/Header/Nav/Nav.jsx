import { Link } from "react-router-dom";
import image from "../../../../assets/arrow-down.svg";

import "./styles.scss";

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
