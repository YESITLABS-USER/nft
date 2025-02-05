import React, { useEffect, useState } from "react";
import Start from "../assets/icons/startPattern.png";
import "../styles/login.css";
import CustomInput from "../components/custom/CustomInput";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import GoogleReview from "../assets/icons/googleReview.svg";
import SocialMediaAbout from "../components/SocialMediaAbout";
import Coopons from "../components/Coopons";
import Verification from "../components/VerificationModal";
import AddShortCut from "../components/AddShortCut";
import Header from "../components/Header";
import CustomButton from "../components/custom/CustomButton";

const SignupPage = () => {
  const [name, setName] = useState(null);
  const [stateCallBack, setStateCallBack] = useState(false);
  const [phNumber, setPhnumber] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addToShort, setToShortCut] = useState(false);
  const [isModalOpen11, setIsModalOpen11] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  //

  const setCallback = (value) => {
    setStateCallBack(value);
  };
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

  //

  //for add to home screen functionality

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIos, setIsIos] = useState(false);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [errors, setErrors] = useState({ name: "", phNumber: "" });

  //
  const validateInputSignup = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required!";
    }
    if (!phNumber) {
      newErrors.phNumber = "Phone number is required!";
    } else if (!/^(\+91 384589347|\+\d+)$/.test(phNumber)) {
      newErrors.phNumber = "Phone number must be numeric!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (stateCallBack === true) {
      validateInputSignup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateCallBack]);
  //
  useEffect(() => {
    // Detect if the user is on iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIos(/iphone|ipad|ipod/.test(userAgent));

    // Listen for the 'beforeinstallprompt' event (for Android)
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the mini-infobar from appearing
      setDeferredPrompt(event);
      setShowInstallButton(true); // Show the "Add to Home Screen" button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Cleanup the event listener
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (isIos) {
      alert(
        'To install this app, tap the "Share" button in Safari and select "Add to Home Screen".'
      );
    } else if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt.");
        } else {
          console.log("User dismissed the install prompt.");
        }
        setDeferredPrompt(null); // Clear the prompt after use
      });
    }
  };
  //

  //

  const handleSignUp = () => {
    const newErrors = {};
    // Validate Name
    if (!name) {
      newErrors.name = "Name is required!";
    }
    // Validate Phone Number
    if (!phNumber) {
      newErrors.phNumber = "Phone number is required!";
    } else if (!/^(\+\d{1,15}|\d{5,})$/.test(phNumber)) {
      newErrors.phNumber = "Phone number must be numeric!";
    }

    // Set the error messages
    setErrors(newErrors);

    // If errors are present, return false to prevent form submission
    if (Object.keys(newErrors).length > 0) return;

    // Validate Checkboxes
    if (!checkboxes.option1 || !checkboxes.option2 || !checkboxes.option3) {
      // alert("Please agree to all terms by checking all the boxes.");
      setIsModalOpen11(true);
      return;
    }

    // If everything is valid
    setIsModalOpen(true);
    setStateCallBack(false);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <Header chgName={false} />
      </div>
      <div className="login-container">
        <img src={Start} alt="Start Pattern" className="start-img" />
        <div className="text-container">
          <span
            style={{
              color: "#000000",
              fontSize: "16px",
              fontWeight: "600",
            }}
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
          style={{ fontSize: "16px", textAlign: "center", alignSelf: "center" }}
        >
          Review easily, enjoy benefits – It all <br /> happens with just{" "}
          <span style={{ color: "#2C0089", fontWeight: "bold" }}>one tap!</span>
        </span>
      </div>

      {/* for login input implementation */}
      <div style={{ marginTop: 20 }}>
        <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
          <CustomInput value={name} onchange={setNameHandle} label={"Name"} />

          {errors.name && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginTop: "5px",
                fontWeight: "500",
                marginLeft: "10px",
              }}
            >
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginTop: "20px", width: "80%", margin: "20px auto" }}>
          <CustomInput
            value={phNumber}
            onchange={setPhHndle}
            label={"Phone Number"}
            num={true}
          />
          {errors.phNumber && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                marginTop: "5px",
                fontWeight: "500",
                marginLeft: "10px",
              }}
            >
              {errors.phNumber}
            </p>
          )}
        </div>
      </div>

      <div style={{ margin: "30px", maxWidth: "500px" }}>
        <label
          style={{
            display: "flex",
            // alignItems: "center",
            fontSize: "16px",
            color: "black",
            fontWeight: "500",
          }}
        >
          <input
            type="checkbox"
            name="option1"
            checked={checkboxes.option1}
            onChange={handleCheckboxChange}
            style={{
              marginRight: "10px",
              accentColor: "#2A0181",
              transform: "scale(1.2)", // Adjust the scale as needed
              WebkitTransform: "scale(1.2)",
              msTransform: "scale(1.2)",
              marginTop: "3px",
            }}
          />
          <span>I am 13 or older.</span>
        </label>
        <br />

        <label
          style={{
            display: "flex",
            fontSize: "16px",
            color: "black",
            fontWeight: "500",
            marginTop: -7,
          }}
        >
          <div style={{}}>
            <input
              type="checkbox"
              name="option2"
              checked={checkboxes.option2}
              onChange={handleCheckboxChange}
              style={{
                accentColor: "#2A0181",
                transform: "scale(1.2)", // Adjust the scale as needed
                WebkitTransform: "scale(1.2)", // Add for better cross-browser support
                msTransform: "scale(1.2)",
              }}
            />
          </div>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 10,
              width: "100%",
            }}
          >
            <span style={{ marginTop: "-2px" }}>
              I agree to the
              <a
                href="/signup"
                style={{
                  color: "#2A0181",

                  marginLeft: "5px",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </span>
            <span>
              and
              <a
                href="/privacy-policy"
                style={{ color: "#2A0181" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Privacy Policy
              </a>
              .
            </span>
          </span>
        </label>

        <br />
        <label
          style={{
            display: "flex",
            fontSize: "16px",
            color: "black",
            fontWeight: "500",
            marginTop: -7,
          }}
        >
          <div style={{}}>
            <input
              type="checkbox"
              name="option3"
              checked={checkboxes.option3}
              onChange={handleCheckboxChange}
              style={{
                accentColor: "#2A0181",
                transform: "scale(1.2)", // Adjust the scale as needed
                WebkitTransform: "scale(1.2)", // Add for better cross-browser support
                msTransform: "scale(1.2)",
                // marginTop: 5,
              }}
            />
          </div>

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 10,
              width: "100%",
              marginTop: "-2px",
            }}
          >
            <span style={{}}>
              I agree to receive special offers, coupons, and marketing updates
              based on my preferences.
            </span>
          </span>
        </label>
      </div>

      <CustomButton
        text="Sign Up"
        onClick={() => {
          // setIsModalOpen(true);
          handleSignUp();
        }}
        fullWidth={"40%"}
      />

      <Modal show={isModalOpen11} onHide={() => setIsModalOpen11(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Please agree to all terms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You need to agree to all terms by checking all the boxes.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen11(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen11(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
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
        text="Leave a review"
        onClick={() => {
          setToShortCut(true);
          console.log("hello test user");
        }}
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
          style={{
            cursor: "pointer", // Pointer on hover
            objectFit: "contain",
          }}
          onClick={() => {
            setToShortCut(true);
            console.log("hello test user");
          }}
        />
      </div> */}

      {/*  for coopons */}
      <Coopons setCallback={setCallback} value={stateCallBack} />

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

      <SocialMediaAbout signup={true} />
      <Verification isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <AddShortCut
        isModalOpen={addToShort}
        setIsModalOpen={setToShortCut}
        handleInstallClick={handleInstallClick}
        showInstallButton={showInstallButton}
      />
    </>
  );
};

export default SignupPage;
