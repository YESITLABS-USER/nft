import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import CustomButton from "../components/custom/CustomButton";
import Logo from "../assets/icons/logo1.png";
import { useNavigate } from "react-router-dom";
function ContactFaq() {
  const [activeTab, setActiveTab] = useState("contact"); // default to 'contact'
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    phNumber: "",
    feedBack: "",
  });
  // Function to handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [name, setName] = useState(null);

  const [phNumber, setPhnumber] = useState(null);

  const [feedBack, setFeedBack] = useState(null);

  const setPhHndle = async (e) => {
    setPhnumber(e.target.value);
  };
  const setNameHandle = async (e) => {
    setName(e.target.value);
  };

  const setFeedback = async (e) => {
    setFeedBack(e.target.value);
  };
  const validateInputs = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required!";
    }
    if (!phNumber) {
      newErrors.phNumber = "Phone number is required!";
    } else if (!/^(\+\d{1,15}|\d{5,})$/.test(phNumber)) {
      newErrors.phNumber = "Phone number must match the format!";
    }
    if (!feedBack) {
      newErrors.feedBack = "Enter your feedback!!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      navigate("/dashboard");
    }
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
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => handleTabChange("contact")}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: activeTab === "contact" ? "#E7DCFF" : "white",
              color: activeTab === "contact" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
              fontWeight: "600",
            }}
          >
            CONTACT Us
          </button>
          <button
            onClick={() => handleTabChange("faq")}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: activeTab === "faq" ? "#E7DCFF" : "white",
              color: activeTab === "faq" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            FAQs
          </button>
        </div>

        {/* Display Content Based on Active Tab */}
        <div style={{ marginLeft: 10 }}>
          {activeTab === "contact" ? (
            <div>
              <h5 style={{ color: "black", fontWeight: "bold" }}>Contact Us</h5>

              <p style={{ color: "#000000", fontWeight: "500", fontSize: 18 }}>
                We’re here to help! If you have any questions, feedback,or
                inquiries about our services, please feel free to reachout to
                us.
              </p>
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
                  placeholder="Name"
                  value={name}
                  onChange={setNameHandle}
                  style={{
                    margin: 10,
                    padding: "10px 0",
                    fontSize: "14px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    outline: "none",
                  }}
                />
                {errors.name && (
                  <p
                    style={{
                      color: "red",
                      width: "80%",
                      marginLeft: "10px",

                      fontWeight: "500",
                      marginTop: -10,
                    }}
                  >
                    {errors.name}
                  </p>
                )}
                <input
                  type="tel"
                  placeholder="Phone"
                  onChange={setPhHndle}
                  value={phNumber}
                  style={{
                    margin: 10,
                    padding: "10px 0",
                    fontSize: "14px",
                    border: "none",
                    borderBottom: "2px solid #ddd",
                    outline: "none",
                  }}
                />
                {errors.phNumber && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "10px",

                      fontWeight: "500",
                      marginTop: -10,
                    }}
                  >
                    {errors.phNumber}
                  </p>
                )}
                <textarea
                  placeholder="Leave a Feedback"
                  rows="4"
                  value={feedBack}
                  onChange={setFeedback}
                  style={{
                    margin: 10,
                    padding: "10px",
                    fontSize: "14px",

                    border: "1px solid #ddd",
                  }}
                />
                {errors.feedBack && (
                  <p
                    style={{
                      color: "red",
                      marginLeft: "15px",
                      fontWeight: "500",
                      marginTop: -10,
                    }}
                  >
                    {errors.feedBack}
                  </p>
                )}
                <CustomButton
                  text="Submit"
                  onClick={() => {}}
                  fullWidth={"40%"}
                />
              </form>
            </div>
          ) : (
            <div>
              <h5 style={{ fontWeight: "bold", color: "#000000" }}>
                Frequently Asked Questions (FAQ)
              </h5>
              <p>1. What does NFC tapping mean?</p>
              <p>
                NFC tapping means bringing your NFC-compatible phone close to an
                NFC tag to activate a specific action, such as redeeming a
                coupon or leaving a review.
              </p>
              <p>2. Do I need an app to use NFC Media?</p>
              <p>
                No, you don’t need an app! Simply tap the NFC tag, and
                everything works directly in your phone’s browser.
              </p>
              <p>3. What do I get by tapping an NFC tag?</p>
              <p>
                By tapping, you can receive coupons, raffle tickets, and
                participate in special campaigns. All your benefits are
                automatically saved to your phone.
              </p>
              <p>4. How do I get coupons?</p>
              <p>
                You get coupons by tapping NFC tags, leaving reviews, or
                participating in campaigns. Some campaigns give you a coupon for
                every tap, while others, for example, after every 5 taps.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactFaq;
