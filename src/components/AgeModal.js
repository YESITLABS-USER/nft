import React, { useEffect, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import CancelModal from "./CancelModal";

const AgeModal = ({ isModalOpen, setIsModalOpen, callBack }) => {
  const closeModal = () => setIsModalOpen(false);

  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const [cancelModal, setCancelModal] = useState(false);

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

  const handleDateChange = (e) => {
    const value = e.target.value;

    // Update the input value
    setDate(value);

    // Validate the format (DD/MM/YYYY)
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!value) {
      // Check if value is empty
      setError("DOB can't be empty");
    } else if (value.length === 10 && !regex.test(value)) {
      setError("Please enter a valid date in DD/MM/YYYY format");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!error && date) {
      const [day, month, year] = date.split("/");

      // Validate if the input date is a valid date
      const birthDate = new Date(`${year}-${month}-${day}`);
      if (isNaN(birthDate.getTime())) {
        alert("Invalid date. Please enter a valid date in DD/MM/YYYY format.");
        return;
      }

      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // Adjust age if the birthday hasn't occurred yet this year
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      // Show age result
      if (age >= 18) {
        setIsModalOpen(false);
        callBack(true);
      } else {
        setCancelModal(true);
        setIsModalOpen(false);
        callBack(false);
      }
    }
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
              backgroundColor: "#FFFFFF",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "90%",
              maxWidth: "400px", // Ensures the modal doesn't get too wide
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <h2 style={{ color: "black" }}>
                Confirm your age before proceeding further!!
              </h2>
              <IoIosCloseCircle
                color={"#2A0181"}
                size={30}
                style={{
                  position: "absolute",
                  right: "-10px",
                  cursor: "pointer",
                  top: "-10px",
                }}
                onClick={closeModal}
              />
            </div>
            <h5 style={{ marginTop: 20 }}>Date of Birth (DD/MM/YYYY)</h5>
            <input
              type="text"
              value={date}
              onChange={handleDateChange}
              placeholder="DD/MM/YYYY"
              maxLength="10"
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                width: "200px",
                marginBottom: "10px",
              }}
            />
            {error && (
              <div style={{ color: "red", marginTop: "5px" }}>{error}</div>
            )}
            <div style={{ marginTop: "20px" }}>
              <button
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#2A0181",
                  color: "white",
                  border: "none",
                  borderRadius: "40px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  width: "40%",
                }}
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      <CancelModal isModalOpen={cancelModal} setIsModalOpen={setCancelModal} />
    </div>
  );
};

export default AgeModal;
