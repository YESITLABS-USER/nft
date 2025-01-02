import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import HomeImg from "../assets/icons/homeImg.png";
import { FaChevronDown } from "react-icons/fa";
import GoogleReview from "../assets/icons/googleReview.png";
import LoyaltyCard from "../assets/icons/loyaltyCard.png";
import Coops1 from "../assets/icons/freecoopons.png";
import Coops2 from "../assets/icons/freeCops2.png";
import Coops3 from "../assets/icons/freecops3.png";

import Img1 from "../assets/icons/img1.png";
import Img2 from "../assets/icons/img2.png";
import Img3 from "../assets/icons/img3.png";
import CustomButton from "../components/custom/CustomButton";

import OpenBtn from "../assets/icons/openingBtn.png";
import CopsActivation from "../components/CopsActivation";
import BottomSheet from "../components/BottomSheet";
import { useNavigate } from "react-router-dom";
import Reward from "../components/Reward";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const [freeCops, setFreeCops] = useState(false);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [ageLimitaion, setAddlimitation] = useState(false);
  const navigate = useNavigate();
  const [coupanPopup, setCoupanPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => { 
    setIsExpanded(!isExpanded);
  };

  const coupans = [
    { name : "Coupon 1", img: Coops1 },
    { name : "Coupon 2", img: Coops2 },
    { name : "Coupon 3", img: Coops3 },
    { name : "Coupon 4", img: Coops1 },
    { name : "Coupon 5", img: Coops2 },
    { name : "Coupon 6", img: Coops3 },
    { name : "Coupon 7", img: Coops1 },
  ]

  const shortText = "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";
  const fullText = "Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef Palate-pleasing precision: Olo in a nutshell. A flag bearer for contemporary Scandi cooking, the hyper-creative menu is moulded around the childhood memories of chef ";

  // Toggle function to show/hide opening hours
  const toggleOpenHours = () => {
    setIsOpen(!isOpen);
  };

  const handleBottmSheet = (val) => {
    setIsSliderOpen(val);
  };
  return (
    <>
      <OnboardHeader disabled={true} OLODISABLE={true} />
      <div
        style={{ backgroundColor: "#E0E0E0",width: "100vw", height: "3px", padding: "0", boxSizing: "border-box",
          marginTop: "20px", }}
      />
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {isOpen && (
          <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }} >
            <li>Monday: 8:00 - 17:00</li>
            <li>Tuesday: 8:00 - 17:00</li>
            <li>Wednesday: 8:00 - 17:00</li>
            <li>Thursday: 8:00 - 17:00</li>
            <li>Friday: 8:00 - 17:00</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        )}
        {isOpen && (
          <div
            style={{ backgroundColor: "#E0E0E0", height: "3px",
              padding: "0",
              boxSizing: "border-box",
              width: "100%",
            }}
          />
        )}
        <img
          src={OpenBtn}
          style={{ objectFit: "contain" }}
          onClick={toggleOpenHours}
          alt="open btn"
        />
      </div>
      <div>
        <img src={HomeImg} alt="homeImg" style={{ objectFit: "contain" }} />
      </div>

      <div style={{ textAlign: "left", margin: "0 auto", width: "90%" }}>
        <span style={{ fontSize: 20, fontWeight: "bold" }}>About</span>

        <div>
          <p>
            {isExpanded ? fullText : `${shortText}...`}{" "}
            <span
              onClick={handleToggle}
              style={{
                color: "#007bff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isExpanded ? "Read less" : "Read more"}
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>EXPLORE OUR COUPONS</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px", // Optional: Add padding to the container
            borderRadius: "10px", // Optional: Round corners of the container
            width: "80%", // Optional: Control the width of the image container
            alignItems: "center", // Center images horizontally
          }}
        >
          <img src={LoyaltyCard} alt="Coupon 1" onClick={() => navigate("/loyality")}
            style={{ objectFit: "contain", cursor: "pointer" }} />
        
          <div style={{maxHeight:'545px', overflowY: 'scroll'}}>
            {coupans.map((coupon, index) => (
              <img key={index} src={coupon.img} alt={coupon.name} style={{ objectFit: "contain", cursor: "pointer" }}
                onClick={() => { setFreeCops(true); setAddlimitation(false); }}
              />
            ))}
          </div>
          
          {/* <img src={Coops1} alt="Coupon 2" style={{ objectFit: "contain" }}
            onClick={() => { setFreeCops(true); setAddlimitation(false); }} />

          <img src={Coops2} alt="Coupon 3" style={{ objectFit: "contain" }} />

          <img src={Coops3} alt="Coupon 4" style={{ objectFit: "contain" }} onClick={() => {
              setFreeCops(true); setAddlimitation(true); }} /> */}
        </div>
        <button
          onClick={() => alert("Show more clicked!")} // Implement your logic here
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#25026E",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          See More
          <FaChevronDown style={{ marginLeft: "10px" }} />
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Img1} alt="Coupon 2" style={{ objectFit: "contain" }} />
        <img src={Img2} alt="Coupon 3" style={{ objectFit: "contain" }} />
        <img src={Img3} alt="Coupon 4" style={{ objectFit: "contain" }} />
      </div>

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

      <CustomButton text="Leave a Review" onClick={() => {}} />
      <CopsActivation
        isModalOpen={freeCops}
        setIsModalOpen={setFreeCops}
        callBack={handleBottmSheet}
        ageLimitaion={ageLimitaion}
        setAddlimitation={setAddlimitation}
      />
      <BottomSheet isOpen={isSliderOpen} onClose={() => {}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#000000",
              paddingTop: "20px",
            }}
          >
            Coupon Confirmation
          </h2>
          <div
            style={{
              backgroundColor: "#E0E0E0",
              width: "80%",
              height: "3px",
              padding: "0",
              boxSizing: "border-box",
              marginBottom: "20px",
            }}
          />
          <p style={{ textAlign: "center", marginBottom: "30px" }}>
            I confirm that I want to activate the coupon.
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <button
              style={{
                padding: "8px 12px",
                backgroundColor: "#FFFFFF",
                color: "Black",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow here
                transition: "box-shadow 0.3s ease", // Smooth transition for hover effect
              }}
              onClick={() => {
                setIsSliderOpen(false);
                setFreeCops(false);
              }}
            >
              RETURN
            </button>
            <button
              style={{ padding: "8px 12px", backgroundColor: "#2A0181", color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow here
                transition: "box-shadow 0.3s ease",
                marginLeft: 20,
              }}
              onClick={() => {
                setIsSliderOpen(false);
                setFreeCops(false);
                setCoupanPopup(true)
              }}
            >
              ACTIVATE
            </button>
          </div>
          <p style={{ margin: 10, color: "#000000", fontSize: 16, fontWeight: "500", textAlign: "center", }} >
            Note: The coupon is valid for 15 minutes after activation.
          </p>
        </div>
      </BottomSheet>
      {coupanPopup && (
        <Reward showPopup={coupanPopup}
          onClose={() => setCoupanPopup(false)}
          countText={"Here is your FREE COFFEE Coupon from olo"}
        />
          )}
    </>
  );
};

export default Dashboard;
