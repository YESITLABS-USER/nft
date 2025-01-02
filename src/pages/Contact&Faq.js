import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import CustomButton from "../components/custom/CustomButton";
import Logo from "../assets/icons/logo1.png";
function ContactFaq() {
  const [activeTab, setActiveTab] = useState("contact"); // default to 'contact'

  // Function to handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
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
            onClick={() => handleTabChange("contact")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "contact" ? "#E7DCFF" : "white",
              color: activeTab === "contact" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Contact Us
          </button>
          <button
            onClick={() => handleTabChange("faq")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "faq" ? "#E7DCFF" : "white",
              color: activeTab === "faq" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            FAQs
          </button>
        </div>

        {/* Display Content Based on Active Tab */}
        <div>
          {activeTab === "contact" ? (
            <div>
              <h3>Contact Us</h3>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
                <textarea
                  placeholder="Leave a Feedback"
                  rows="4"
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                  }}
                />
                <CustomButton text="Submit" onClick={() => {}} />
              </form>
            </div>
          ) : (
            <div>
              <h3>Frequently Asked Questions (FAQ)</h3>
              1. What does NFC tapping mean? NFC tapping means bringing your
              NFC-compatible phone close to an NFC tag to activate a specific
              action, such as redeeming a coupon or leaving a review. 2. Do I
              need an app to use NFC Media? No, you don’t need an app! Simply
              tap the NFC tag, and everything works directly in your phone’s
              browser. 3. What do I get by tapping an NFC tag? By tapping, you
              can receive coupons, raffle tickets, and participate in special
              campaigns. All your benefits are automatically saved to your
              phone. 4. How do I get coupons? You get coupons by tapping NFC
              tags, leaving reviews, or participating in campaigns. Some
              campaigns give you a coupon for every tap, while others, for
              example, after every 5 taps.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactFaq;
