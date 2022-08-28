// Task-1
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/"> Home</Link>
        <Link to="/login"> Login</Link>
        <Link to="profile"> Profile</Link>
        <Link to="/signup"> Signup</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
