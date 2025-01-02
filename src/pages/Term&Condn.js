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
      <OnboardHeader />

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
          <span style={{ color: "#000000", fontSize: 20 }}>TAGIS</span>
          <span style={{ color: "#2D008C", fontSize: 16, fontWeight: "bold" }}>
            Tap Connect Experience
          </span>
        </div>
      </div>
      <div style={{ margin: 20 }}>
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => handleTabChange("privacy")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "privacy" ? "#E7DCFF" : "white",
              color: activeTab === "privacy" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => handleTabChange("terms")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "terms" ? "#E7DCFF" : "white",
              color: activeTab === "terms" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Display Content Based on Active Tab */}
        <div>
          {activeTab === "privacy" ? (
            <div>
              <h3>Privacy Policy</h3>
              <p>
                Last Updated: [Date] At [Your Company Name] (“we,” “our,” or
                “us”), we are committed to protecting your privacy and personal
                data in compliance with the General Data Protection Regulation
                (GDPR) and other applicable data protection laws. This Privacy
                Policy explains how we collect, use, store, and share your
                personal data, as well as your rights regarding your
                information. 1. Data Controller Contact Information [Your
                Company Name] is the data controller for the personal data you
                provide through our services. If you have any questions or
                concerns, please contact us at: Company Name: [Your Company
                Name] Address: [Your Company Address] Email: [Contact Email
                Address] Phone: [Contact Phone Number] 2. What Data We Collect
                We may collect the following types of personal data, depending
                on your interactions with our services: Personal Identification
                Data: Name, email address, phone number, postal address, etc.
                Account Information: Username, password, profile details, etc.
                Transaction Data: Information about your purchases, including
                payment details. Technical Data: IP address, browser type,
                device information, time zone settings, and other information
                collected through cookies. Usage Data: Information on how you
                use our website, app, products, and services.
              </p>
            </div>
          ) : (
            <div>
              <h3>Terms & Conditions</h3>
              <p>
                1. Data Controller Contact Information [Your Company Name] is
                the data controller for the personal data you provide through
                our services. If you have any questions or concerns, please
                contact us at: Company Name: [Your Company Name] Address: [Your
                Company Address] Email: [Contact Email Address] Phone: [Contact
                Phone Number] 2. What Data We Collect We may collect the
                following types of personal data, depending on your interactions
                with our services: Personal Identification Data: Name, email
                address, phone number, postal address, etc. Account Information:
                Username, password, profile details, etc. Transaction Data:
                Information about your purchases, including payment details.
                Technical Data: IP address, browser type, device information,
                time zone settings, and other information collected through
                cookies. Usage Data: Information on how you use our website,
                app, products, and services. Marketing and Communication Data:
                Your preferences in receiving marketing materials and your
                communication preferences. 3. How We Use Your Data We use your
                data for the following purposes: Service Provision: To provide
                and maintain our services, fulfill orders, and process payments.
                Customer Support: To respond to your inquiries, troubleshoot
                issues, and provide technical support. Personalization: To
                personalize your experience and deliver content and product
                offerings relevant to your interests.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TermCondn;
