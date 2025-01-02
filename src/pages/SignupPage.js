import React, { useState } from "react";
import Start from "../assets/icons/startPattern.png";
import "../styles/login.css";
import CustomInput from "../components/custom/CustomInput";
import CustomButton from "../components/custom/CustomButton";

import GoogleReview from "../assets/icons/googleReview.png";
import SocialMediaAbout from "../components/SocialMediaAbout";
import Coopons from "../components/Coopons";
import Verification from "../components/VerificationModal";
import AddShortCut from "../components/AddShortCut";
import Header from "../components/Header";

const SignupPage = () => {
  const [name, setName] = useState(null);

  const [phNumber, setPhnumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addToShort, setToShortCut] = useState(false);

  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const setPhHndle = async (e) => {
    setPhnumber(e.target.value);
  };
  const setNameHandle = async (e) => {
    setName(e.target.value);
  };

  // const handleClick = () => {
  //   // setIsModalOpen(true);
  // };
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
        <CustomInput value={name} onchange={setNameHandle} label={"Name"} />
        <div style={{ marginTop: "20px" }}>
          <CustomInput
            value={phNumber}
            onchange={setPhHndle}
            label={"Phone Number"}
          />
        </div>
      </div>

      <div style={{ margin: "30px", maxWidth: "500px" }}>
        <label
          style={{
            display: "block",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          <input
            type="checkbox"
            name="option1"
            checked={checkboxes.option1}
            onChange={handleCheckboxChange}
            style={{ marginRight: "10px" }}
          />
          I am 13 or older
        </label>
        <br />
        <label
          style={{
            display: "block",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          <input
            type="checkbox"
            name="option2"
            checked={checkboxes.option2}
            onChange={handleCheckboxChange}
            style={{ marginRight: "10px" }}
          />
          I agree to the Terms and Conditions and Privacy Policy.
        </label>
        <br />
        <label
          style={{
            display: "block",
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          <input
            type="checkbox"
            name="option3"
            checked={checkboxes.option3}
            onChange={handleCheckboxChange}
            style={{ marginRight: "10px" }}
          />
          I agree to receive special offers, coupons, and marketing updates
          based on my preferences.
        </label>
      </div>

      <CustomButton
        text="Sign Up"
        onClick={() => {
          setIsModalOpen(true);
        }}
      />
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

      <CustomButton
        text="Leave a Review"
        onClick={() => {
          setToShortCut(true);
          console.log("hello test user");
        }}
      />

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
      <Verification isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AddShortCut isModalOpen={addToShort} setIsModalOpen={setToShortCut} />
    </>
  );
};

export default SignupPage;
