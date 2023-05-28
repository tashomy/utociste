import React, { useEffect } from "react";
import "./Header.scss";
import { Nav, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "../../../../assets/icons/logo-9.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const url = useLocation();

  return (
    <div className="header-wrapper wrapper-default">
      <div className="header-container container-default">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to={"/"} className={url.pathname == "/" ? "active" : ""}>
                Početna
              </Link>
            </li>
            <li>
              <Link
                to={"/dodaj"}
                className={url.pathname == "/dodaj" ? "active" : ""}
              >
                Dodaj
              </Link>
            </li>
            <li>
              <Link
                to={"/o-nama"}
                className={url.pathname == "/o-nama" ? "active" : ""}
              >
                O nama
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
