import React, { useEffect } from "react";
import OnboardHeader from "../components/OnboardHeader";
import Logo from "../assets/icons/logo1.png";
import { useLocation } from "react-router-dom";

function AboutScreen() {
  const location = useLocation();
  const { message } = location.state || {};
  console.log(message, "message data");
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //
  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <OnboardHeader bgrIcon={true} message={message} />
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
      <h3
        style={{
          fontWeight: "bold",
          width: "80%",
          marginTop: "50px",
          marginLeft: "40px",
        }}
      >
        About Tagis
      </h3>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div style={{ fontWeight: "bold", color: "black", marginTop: "20px" }}>
          Welcome to Tagis
        </div>
        <p style={{ color: "black", fontWeight: "500" }}>
          At NFC Media, we believe in transforming the way consumers engage with
          businesses through innovative technology. Our mission is to enhance
          your shopping experience by providing easy access to exclusive
          discounts, personalized offers, and rewarding experiences through our
          NFC-based coupon system.
        </p>

        <div style={{ fontWeight: "bold", color: "black", marginTop: "10px" }}>
          Who We Are
        </div>
        <p style={{ color: "black", fontWeight: "500" }}>
          We are a dedicated team of technology enthusiasts, marketers, and
          customer service professionals committed to making your shopping
          journey more enjoyable and rewarding. Our platform connects consumers
          with local businesses, allowing you to discover great offers while
          supporting the community around you.
        </p>

        <div style={{ fontWeight: "bold", color: "black", marginTop: "10px" }}>
          Our Vision
        </div>
        <p style={{ color: "black", fontWeight: "500" }}>
          Our vision is to create a seamless and interactive shopping experience
          for everyone. We aim to bridge the gap between consumers and
          businesses through smart technology, making it easier for you to
          access the rewards you deserve.
        </p>
      </div>
    </div>
  );
}

export default AboutScreen;
