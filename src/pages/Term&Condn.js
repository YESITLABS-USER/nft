import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import Logo from "../assets/icons/logo1.png";
function TermCondn() {
  const [activeTab, setActiveTab] = useState("privacy"); // default to 'privacy'

  // Function to handle button clicks
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <OnboardHeader />
      </div>

      <div
        style={{
          backgroundColor: "#E0E0E0",
          width: "100vw",
          height: "3px",
          padding: "0",
          boxSizing: "border-box",
          marginTop: -30,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Logo} alt="logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <span style={{ color: "#000000", fontSize: 20, fontWeight: "600" }}>
            TAGIS
          </span>
          <span style={{ color: "#2D008C", fontSize: 16, fontWeight: "bold" }}>
            Tap Connect Experience
          </span>
        </div>
      </div>
      <div style={{ margin: 20 }}>
        <div style={{ marginBottom: "20px", width: "100%" }}>
          <button
            onClick={() => handleTabChange("privacy")}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: activeTab === "privacy" ? "#E7DCFF" : "white",
              color: activeTab === "privacy" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
              fontWeight: "600",
            }}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleTabChange("terms")}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: activeTab === "terms" ? "#E7DCFF" : "white",
              color: activeTab === "terms" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Display Content Based on Active Tab */}
        <div>
          {activeTab === "privacy" ? (
            <div>
              <h5 style={{ color: "black", fontWeight: "bold" }}>
                Privacy Policy
              </h5>
              <div>
                {activeTab === "privacy" ? (
                  <div>
                    <p style={{ fontWeight: "600", marginTop: 10 }}>
                      Last Updated: [Date] At [Your Company Name] (“we,” “our,”
                      or “us”), we are committed to protecting your privacy and
                      personal data in compliance with the General Data
                      Protection Regulation (GDPR) and other applicable data
                      protection laws. This Privacy Policy explains how we
                      collect, use, store, and share your personal data, as well
                      as your rights regarding your information.
                    </p>
                    <p style={{ fontWeight: "600", marginTop: 10 }}>
                      <>1. Data Controller Contact Information:</> [Your Company
                      Name] is the data controller for the personal data you
                      provide through our services. If you have any questions or
                      concerns, please contact us at:
                      <br />
                      <ul>
                        <li>Company Name: [Your Company Name]</li>
                        <li>Address: [Your Company Address]</li>
                        <li>Email: [Contact Email Address]</li>
                        <li>Phone: [Contact Phone Number]</li>
                      </ul>
                    </p>
                    <p style={{ fontWeight: "600", marginTop: 10 }}>
                      <>2. What Data We Collect</> <br /> We may collect the
                      following types of personal data, depending on your
                      interactions with our services:
                      <br />
                      Personal Identification Data: Name, email address, phone
                      number, postal address, etc.
                      <br />
                      Account Information: Username, password, profile details,
                      etc.
                      <br />
                      Transaction Data: Information about your purchases,
                      including payment details.
                      <br />
                      Technical Data: IP address, browser type, device
                      information, time zone settings, and other information
                      collected through cookies.
                      <br />
                      Usage Data: Information on how you use our website, app,
                      products, and services.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <div>
              <h3>Terms & Conditions</h3>

              <p>
                <strong>1. Data Controller Contact Information:</strong>
                <p style={{ fontWeight: "600", marginTop: 10 }}>
                  [Your Company Name] is the data controller for the personal
                  data you provide through our services. If you have any
                  questions or concerns, please contact us at:
                  <br />
                  <ul>
                    <li>Company Name: [Your Company Name]</li>
                    <li>Address: [Your Company Address]</li>
                    <li>Email: [Contact Email Address]</li>
                    <li>Phone: [Contact Phone Number]</li>
                  </ul>
                </p>
              </p>

              <p>
                <strong>2. What Data We Collect:</strong> <br />
                <p style={{ fontWeight: "600", marginTop: 10 }}>
                  We may collect the following types of personal data, depending
                  on your interactions with our services:
                  <br />
                  <ul>
                    <li>
                      Personal Identification Data: Name, email address, phone
                      number, postal address, etc.
                      <br />
                    </li>
                    <li>
                      Account Information: Username, password, profile details,
                      etc.
                      <br />
                    </li>
                    <li>
                      Transaction Data: Information about your purchases,
                      including payment details.
                      <br />
                    </li>
                    <li>
                      Technical Data: IP address, browser type, device
                      information, time zone settings, and other information
                      collected through cookies.
                      <br />
                    </li>
                    <li>
                      Usage Data: Information on how you use our website, app,
                      products, and services.
                      <br />
                    </li>
                    <li>
                      Marketing and Communication Data: Your preferences in
                      receiving marketing materials and your communication
                      preferences.
                    </li>
                  </ul>
                </p>
              </p>

              <p>
                <strong>3. How We Use Your Data:</strong>
                <p style={{ fontWeight: "600" }}>
                  <br /> We use your data for the following purposes:
                  <br />
                  <ul>
                    <li>
                      Service Provision: To provide and maintain our services,
                      fulfill orders, and process payments.
                      <br />
                    </li>
                    <li>
                      Customer Support: To respond to your inquiries,
                      troubleshoot issues, and provide technical support.
                      <br />
                    </li>
                    <li>
                      Personalization: To personalize your experience and
                      deliver content and product offerings relevant to your
                      interests.
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TermCondn;
