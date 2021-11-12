import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/project">Project</Link>
    </div>
  );
};

export default Header;
