import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={LogoImg} alt="Vidya Group" className="h-12" />

      <span className="ml-3 text-2xl font-bold text-primary">
        Vidya Group of Institution
      </span>
    </Link>
  );
};

export default Logo;
