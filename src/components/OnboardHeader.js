import React, { useState } from "react";
import Hambgr from "../assets/icons/hamburger.png";
// import Translator from "../assets/icons/translator.png";
import OLO from "../assets/icons/header.png";
import { FaChevronDown } from "react-icons/fa";

import HeadBg from "../assets/icons/headbg.png";
// import Profile from "../assets/icons/profile.png";
import Man from "../assets/icons/mandefalut.png";
import Girl from "../assets/icons/girldefault.png";
import Other from "../assets/icons/otherDefault.png";
import bell from "../assets/icons/bell.png";
import { IoArrowBackSharp } from "react-icons/io5";
import Group from "../assets/icons/Group.png";
import { Button } from "react-bootstrap";
import { TbWorld } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import SlidingPage from "./SlidingPage";
import OnboaringInfo from "./OnboadingInfo";
import { useNavigate } from "react-router-dom";

function OnboardHeader({
  disabled,
  OLODISABLE,
  selectAvatar,
  bgrIcon = false,
  message,
}) {
  const [showPage, setShowPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const profileMapping = {
    male: Man,
    female: Girl,
    transgender: Other,
  };

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div style={style.headtop}>
        {bgrIcon ? (
          <IoArrowBackSharp
            size={30}
            style={{ marginLeft: "20px" }}
            onClick={() => {
              navigate(message === "signup" ? "/signup" : "/");
            }}
          />
        ) : (
          <img
            src={Hambgr}
            style={style.hambgrimg}
            alt="Hambgr"
            onClick={() => setShowPage(true)}
          />
        )}

        {/* 
            langauge translator
 
           */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            // border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            position: "relative",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            backgroundColor: "#f9f9f9",
            width: "130px",
            height: "40px",
            marginRight: "10px",
          }}
        >
          <div style={{ marginRight: "10px" }}>
            <TbWorld size={22} />
          </div>
          <div
            style={{ flex: 1, color: "black", fontWeight: "500", fontSize: 16 }}
          >
            {selectedLanguage}
          </div>
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={toggleDropdown}
          >
            <FaChevronDown />
          </div>
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginTop: "45px",
                zIndex: 100,
                width: "100%",
              }}
            >
              <div
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={() => selectLanguage("English")}
              >
                English
              </div>
              <div
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={() => selectLanguage("Finnish")}
              >
                Finish
              </div>
            </div>
          )}
        </div>
        {/* <img src={Translator} alt="Translator" style={style.imgTrnstor} /> */}
      </div>
      {/* second bottom */}
      {disabled === true && (
        <>
          <div
            style={{
              backgroundColor: "#25026E",
              display: "flex",
              justifyContent: "space-between",
              // height: "80px",
              padding: "8px 0",
              alignItems: "center",
            }}
          >
            <FaInfoCircle
              size={18}
              color="white"
              style={{
                position: "absolute",
                right: 0,
                // top: 0,
                marginTop: -55,
                marginRight: 5,
              }}
              onClick={() => setIsModalOpen(true)}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "10px",
              }}
            >
              {/* <img src={Profile} alt="OLO" style={style.oloimg} /> */}
              <img
                src={selectAvatar ? profileMapping[selectAvatar] : Man}
                alt="OLO"
                style={style.oloimg}
              />
              <div>
                <span style={{ color: "white", display: "block" }}>
                  Martin <br /> James
                </span>
                {/* <span style={{ color: "white", display: "block" }}>James</span> */}
              </div>
            </div>
            <div style={{ display: "flex", gap: "5px", paddingTop: "5px" }}>
              <Button style={style.btnCopn}>
                <img
                  src={Group}
                  style={{ objectFit: "contain", marginRight: 10 }}
                  alt="Group"
                />
                <span
                  style={{
                    borderLeft: "1px dashed black",
                    paddingLeft: "5px",
                  }}
                >
                  0
                </span>
              </Button>

              <Button
                style={{
                  marginRight: 10,
                  color: "black",
                  borderColor: "black",
                  height: 30,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundImage: `url(${HeadBg})`, // Using the imported background image directly here
                  backgroundSize: "cover", // Ensures the image covers the entire button
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents tiling
                }}
              >
                <span style={{ paddingRight: "20px" }}>Coupons</span>
                <span>0</span>
              </Button>
            </div>
          </div>
          {/* third bottom */}
          {OLODISABLE === true && (
            <div style={style.headBottm}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img src={OLO} alt="OLO" style={{}} />

                <div style={style.finlenTxt}>
                  <span className="restaurant-name">Olo</span>
                  <span className="location">Helsinki, Finland</span>
                </div>
              </div>

              <Button
                style={{
                  backgroundColor: "white",
                  border: "2px solid #DCCBFF",
                  color: "black",
                  height: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  position: "absolute",
                  right: "11px",
                }}
              >
                <img src={bell} alt="follow" /> <span> Follow </span>
              </Button>
            </div>
          )}
        </>
      )}
      <SlidingPage showPage={showPage} setShowPage={setShowPage} />
      <OnboaringInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default OnboardHeader;
const style = {
  headtop: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4%",
  },
  imgTrnstor: {
    height: 30,
    width: "30%",
    objectFit: "contain",
    marginRight: 20,
  },
  headMidd: {},
  headBottm: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    alignItems: "center",
  },
  oloimg: {
    width: "auto",
    height: 50,
    objectFit: "contain",
    backgroundColor: "white",
    borderRadius: "100%",
    // justifyContent: "start",
    // marginLeft: 15,
  },
  finlenTxt: {
    display: "flex",
    flexDirection: "column",
    marginRight: "100px",
  },
  hambgrimg: {
    objectFit: "contain",
    marginLeft: 20,
  },
  btnCopn: {
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    // padding: "10px 20px",
    height: 30,
    // margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 25,
    marginRight: "10px",
  },
};
