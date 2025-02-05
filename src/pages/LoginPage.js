import React, { useEffect, useState } from "react";
import Start from "../assets/icons/startPattern.png";
import "../styles/login.css";
import CustomInput from "../components/custom/CustomInput";
import CustomButton from "../components/custom/CustomButton";

import GoogleReview from "../assets/icons/googleReview.svg";
import SocialMediaAbout from "../components/SocialMediaAbout";
import Coopons from "../components/Coopons";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [name, setName] = useState(null);

  const [stateCallBack, setStateCallBack] = useState(false);

  console.log(stateCallBack, "state call back is not a function");
  const [phNumber, setPhnumber] = useState(null);
  const [errors, setErrors] = useState({ name: "", phNumber: "" });
  const navigate = useNavigate();
  const setCallback = (value) => {
    console.log("Callback value:", value);
    setStateCallBack(value);
  };
  const setPhHndle = async (e) => {
    setPhnumber(e.target.value);
  };
  const setNameHandle = async (e) => {
    setName(e.target.value);
  };
  const validateInputs = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required!";
    }
    if (!phNumber) {
      newErrors.phNumber = "Phone number is required!";
    } else if (!/^(\+\d{1,15}|\d{5,})$/.test(phNumber)) {
      newErrors.phNumber = "Phone number must be numeric!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (stateCallBack === true) {
      validateInputs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateCallBack]);
  const handleClick = () => {
    if (validateInputs()) {
      navigate("/dashboard");
      setStateCallBack(false);
    }
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Header chgName={true} />
      </div>
      <div className="login-container">
        <img src={Start} alt="Start Pattern" className="start-img" />
        <div className="text-container">
          <span
            style={{ color: "#000000", fontSize: "16px", fontWeight: "600" }}
          >
            TAGIS
          </span>
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
            marginTop: 20,
          }}
        >
          Welcome to Tagis!
        </span>
        <span
          style={{
            fontSize: "16px",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          Review easily, enjoy benefits – It all <br /> happens with just{" "}
          <span style={{ color: "#2C0089", fontWeight: "bold" }}>one tap!</span>
        </span>
      </div>

      {/* for login input implementation */}
      <div style={{ marginTop: 20 }}>
        <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
          <CustomInput
            value={name || ""}
            onchange={setNameHandle}
            label={"Name"}
            style={{ width: "80%" }}
          />

          {errors.name && (
            <p
              style={{
                color: "red",
                width: "80%",
                marginLeft: "10px",
                marginTop: "5px",
                fontWeight: "500",
              }}
            >
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
          <CustomInput
            value={phNumber || ""}
            onchange={setPhHndle}
            label={"Phone Number"}
            num={true}
          />
          {errors.phNumber && (
            <p
              style={{
                color: "red",
                marginLeft: "10px",
                marginTop: "5px",
                fontWeight: "500",
              }}
            >
              {errors.phNumber}
            </p>
          )}
        </div>
      </div>
      <CustomButton text="Log In" onClick={handleClick} fullWidth={"40%"} />
      {/* <div
        style={{
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <img
          src={LoginBtn}
          alt="loginbtn"
          onClick={() => {}}
          style={{
            cursor: "pointer", // Pointer on hover
            objectFit: "contain",
          }}
        />
      </div> */}

      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100%",
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
        text="Leave a review"
        onClick={() => {}}
        fullWidth={"50%"}
      />
      {/* <div
        style={{
          display: "flex", // Use flexbox for centering
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <img
          src={leaveReview}
          alt="leave review"
          onClick={() => {}}
          style={{
            cursor: "pointer", // Pointer on hover
            objectFit: "contain",
          }}
        />
      </div> */}
      {/*  for coopons */}
      <Coopons setCallback={setCallback} value={stateCallBack} />

      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100%",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      />

      {/*  social medias */}

      <SocialMediaAbout signup={false} />
    </>
  );
};

export default LoginPage;
