import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";
const SocialMediaAbout = () => {
  return (
    <div style={{ margin: "10px" }}>
      <span
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#000000",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        Social media
      </span>
      <div style={{ marginTop: "10px" }}>
        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaFacebook size={45} />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaLinkedin size={45} />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px" }}
        >
          <FaInstagram size={45} />
        </a>
      </div>

      {/* Card with About Us Text */}
      <Card
        style={{ zIndex: "100",
          backgroundColor: "#25026E",
          color: "white",
          marginTop: "30px",
          borderRadius: "20px",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Card.Title
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            About Us
          </Card.Title>
          <Card.Text style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Membership in Tagis is completely free and risk-free. You can
            collect coupons, participate in raffles, and can join fun events
            like tag hunts. In return, we ask you to review businesses you want
            to and where you go – helping them improve their services while you
            enjoy great rewards!
          </Card.Text>

          {/* Know More Button */}
          <Button
            variant="light" // Makes the button background white with black text
            style={{
              marginTop: "15px", // Adds spacing between text and button
              padding: "10px 20px", // Adds padding inside the button
              fontSize: "16px", // Adjusts button text size
              borderColor: "black", // Makes the button border black
              alignSelf: "center",
            }}
            onClick={() => alert("Know more about Tagis!")} // Example onClick handler
          >
            Know More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SocialMediaAbout;
