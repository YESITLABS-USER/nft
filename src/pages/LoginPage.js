import React, { useState } from "react";
import Start from "../assets/icons/startPattern.png";
import "../styles/login.css";
import CustomInput from "../components/custom/CustomInput";
import CustomButton from "../components/custom/CustomButton";

import GoogleReview from "../assets/icons/googleReview.png";
import SocialMediaAbout from "../components/SocialMediaAbout";
import Coopons from "../components/Coopons";
import Header from "../components/Header";

const LoginPage = () => {
  const [name, setName] = useState(null);

  const [phNumber, setPhnumber] = useState(null);

  const setPhHndle = async (e) => {
    setPhnumber(e.target.value);
  };
  const setNameHandle = async (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <>
      <Header />
      <div className="login-container">
        <img src={Start} alt="Start Pattern" className="start-img" />
        <div className="text-container">
          <span style={{ color: "#000000", fontSize: "16px" }}>TAGIS</span>
          <span style={{ color: "#2D008C", fontWeight: "bold" }}>
            Tap Connect Experience
          </span>
        </div>
      </div>

      <div className="text-container">
        <span
          style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Welcome to Tagis!
        </span>
        <span
          style={{ fontSize: "16px", textAlign: "center", alignSelf: "center" }}
        >
          Review easily, enjoy benefits – It all <br /> happens with just{" "}
          <span style={{ color: "#2C0089", fontWeight: "bold" }}>one tap!</span>
        </span>
      </div>

      {/* for login input implementation */}
      <div style={{}}>
        <CustomInput value={name || ""} onchange={setNameHandle} label={"Name"} style={{width:'80%'}}/>
        <div style={{ marginTop: "20px", width:'80%', margin:'20px auto' }}>
          <CustomInput
            value={phNumber || ""}
            onchange={setPhHndle}
            label={"Phone Number"}
          />
        </div>
      </div>
      <CustomButton text="Log In" onClick={handleClick} />
      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100vw",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={GoogleReview}
          alt="Star Pattern"
          className="start-img"
          style={{ width: "auto", height: "auto" }} // Adjust width and height as needed
        />
      </div>

      <CustomButton text="Leave a Review" onClick={handleClick} />

      {/*  for coopons */}
      <Coopons />

      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100vw",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      />

      {/*  social medias */}

      <SocialMediaAbout />
    </>
  );
};

export default LoginPage;
