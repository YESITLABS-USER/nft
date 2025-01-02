import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/header.css";
import ImgBurger from "../assets/icons/hamburger.png";
import OIO from "../assets/icons/header.png";
import { Link } from "react-router-dom";
import SlidingPage from "./SlidingPage";

const Header = () => {
  const [showPage, setShowPage] = useState(false);
  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <img
            src={ImgBurger}
            alt="ImgBurger"
            style={{
              width: "50%",
              height: "50%",
              objectFit: "contain",
              alignSelf: "center",
            }}
            onClick={() => setShowPage(true)}
          />
        </div>
        <div className="header-buttons">
          <Button
            variant="primary"
            style={{ backgroundColor: "#2D008D", borderRadius: "10px" }}
          >
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              Sign Up
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="coupons-button"
            style={{ borderRadius: "10px" }}
          >
            <span>Coupons</span>
            <span>0</span>
          </Button>
        </div>
      </div>
      <div className="header-extra">
        <img
          src={OIO}
          alt=""
          style={{
            width: "auto",
            height: "70px",
            objectFit: "contain",
            justifyContent: "start",
          }}
        />
        <div className="text-container">
          <span className="restaurant-name">Olo</span>
          <span className="location">Helsinki, Finland</span>
        </div>
      </div>
      <SlidingPage showPage={showPage} setShowPage={setShowPage} />
    </div>
  );
};

export default Header;
