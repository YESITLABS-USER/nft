import React, { useEffect, useState } from "react";
import CustomButton from "./custom/CustomButton";

import OtpInput from "react-otp-input";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Verification = ({ isModalOpen, setIsModalOpen }) => {
  const closeModal = () => setIsModalOpen(false);
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  //

  const [timeLeft, setTimeLeft] = useState(59); // Initial time in seconds

  useEffect(() => {
    // Set up the countdown timer when the component mounts
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer); // Stop the timer when it reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  ///

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);
  const handleSubmit = () => {
    closeModal(); // Close the modal first
    navigate("/dashboard"); // Navigate to the dashboard
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "95%",
            }}
          >
            <h2>OTP Verification</h2>
            <IoIosCloseCircle
              color={"#2A0181"}
              size={30}
              onClick={closeModal}
              style={{
                position: "absolute",
                right: 15,
                cursor: "pointer",
                marginTop: -50,
              }}
            />

            <div
              style={{
                backgroundColor: "#E0E0E0",
                width: "80%",
                height: "3px",
                padding: "0",
                boxSizing: "border-box",
                margin: "20px",
                marginLeft: "30px",
              }}
            />
            <p style={{ fontSize: "20px", color: "#000000" }}>
              Please type the verification code sent to{" "}
              <strong style={{ fontWeight: "bold" }}>+1 999 999 9999</strong>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                textAlign: "center",
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span> </span>}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "24px",
                      textAlign: "center",
                      border: "2px solid #ccc",
                      borderRadius: "5px",
                      margin: "0 5px", // Adjust margin between inputs
                    }}
                  />
                )}
              />
            </div>
            <CustomButton text={"Submit"} onClick={handleSubmit} />

            <div style={{ fontSize: "16px", color: "#000000", marginTop: 10 }}>
              <p style={{ margin: "0", color: "#565656" }}>
                Didn't receive the verification code?{" "}
                <strong style={{ fontWeight: "bold" }}>Resend</strong>
              </p>
              <p style={{ margin: "0", fontSize: "14px", color: "#565656" }}>
                Resend verification code in{" "}
                <span style={{ color: "#2B0186" }}>
                  {timeLeft < 10 ? `0${timeLeft}` : timeLeft} sec
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verification;
