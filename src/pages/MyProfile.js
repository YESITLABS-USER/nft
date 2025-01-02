import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";

import Man from "../assets/icons/mandefalut.png";
import Girl from "../assets/icons/girldefault.png";
import Other from "../assets/icons/otherDefault.png";
import CustomButton from "../components/custom/CustomButton";

const MyProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [birthdayInput, setBirthdayInput] = useState(false);
  const [firstNameInput, setFirstNameInput] = useState(false);
  const [surNameInput, setSurNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };
  return (
    <>
      <OnboardHeader disabled={true} />

      <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "#000000",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Profile Picture:
        </label>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          {[
            {
              id: "male",
              label: "Male",
              image: Man,
            },
            {
              id: "female",
              label: "Female",
              image: Girl,
            },
            {
              id: "transgender",
              label: "Transgender",
              image: Other,
            },
          ].map((profile) => (
            <div key={profile.id} style={{ textAlign: "center" }}>
              <img
                src={profile.image}
                alt={profile.label}
                style={{
                  border:
                    selectedProfile === profile.id
                      ? "3px solid green"
                      : "1px solid #ccc",
                  borderRadius: "8px",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <button
                onClick={() => handleProfileSelect(profile.id)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor:
                    selectedProfile === profile.id ? "#2A0181" : "#DB00FF",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {selectedProfile === profile.id ? "Selected" : "Select"}
              </button>
            </div>
          ))}
        </div>

        <label
          style={{
            display: "block",
            marginBottom: "10px",
            color: "#000000",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Personal Information:
        </label>
        <div style={{ marginBottom: "20px" }}>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              Personal ID:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              1980
            </span>
          </p>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              NickName:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              Martin James
            </span>
          </p>
          <p>
            <span style={{ color: "#000000", fontWeight: "500" }}>
              Phone No:
            </span>
            <span style={{ display: "inline-block", marginLeft: "50px" }}>
              +1253272834
            </span>
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              width: "40%",
              color: "#000000",

              fontWeight: "500",
            }}
          >
            Birthday:
          </label>
          {birthdayInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setBirthdayInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            First Name:
          </label>
          {firstNameInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setFirstNameInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            Surname:
          </label>
          {surNameInput ? (
            <input
              type="text"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setSurNameInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ width: "40%", color: "#000000", fontWeight: "500" }}>
            Email:
          </label>
          {emailInput ? (
            <input
              type="email"
              placeholder="Add"
              style={{
                display: "block",
                marginTop: "10px",
                padding: "5px",
                border: "none", // Removes the default border
                borderBottom: "2px solid #000", // Adds only the bottom border
                outline: "none", // Removes the focus outline
              }}
            />
          ) : (
            <button
              onClick={() => setEmailInput(true)}
              style={{
                marginLeft: "10px",
                padding: "5px 10px",
                backgroundColor: "#2A0181",
                color: "white",
                borderRadius: 30,
                width: "30%",
                height: 40,
              }}
            >
              Add
            </button>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#000000", fontWeight: "500" }}>Sex:</label>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="male" /> Male
            </label>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="female" /> Female
            </label>
            <label style={{ color: "#000000", fontWeight: "500" }}>
              <input type="radio" name="sex" value="other" /> Other
            </label>
          </div>
        </div>

        <CustomButton text="Save" style={{width:'140px'}} onClick={() => {}} />
      </div>
    </>
  );
};

export default MyProfile;
