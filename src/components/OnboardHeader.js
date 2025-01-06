import React, { useState } from "react";
import Hambgr from "../assets/icons/hamburger.png";
import Translator from "../assets/icons/translator.png";
import OLO from "../assets/icons/header.png";

// import Profile from "../assets/icons/profile.png";
import Man from "../assets/icons/mandefalut.png";
import Girl from "../assets/icons/girldefault.png";
import Other from "../assets/icons/otherDefault.png";
import bell from "../assets/icons/bell.png";

import Group from "../assets/icons/Group.png";
import { Button } from "react-bootstrap";

import { FaInfoCircle } from "react-icons/fa";
import SlidingPage from "./SlidingPage";
import OnboaringInfo from "./OnboadingInfo";
function OnboardHeader({ disabled, OLODISABLE,selectAvatar }) {
  const [showPage, setShowPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileMapping = {
    male: Man,
    female: Girl,
    transgender: Other
  };

  return (
    <>
      <div style={style.headtop}>
        <img
          src={Hambgr}
          style={style.hambgrimg}
          alt="Hambgr"
          onClick={() => setShowPage(true)}
        />
        <img src={Translator} alt="Translator" style={style.imgTrnstor} />
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
              padding:"8px 0",
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
            <div style={{ display: "flex", alignItems:'center', padding:'10px', gap:'10px' }}>
              {/* <img src={Profile} alt="OLO" style={style.oloimg} /> */}
              <img src={selectAvatar ? profileMapping[selectAvatar] : Man} alt="OLO" style={style.oloimg} />
              <div >
                <span style={{ color: "white", display: "block" }}>Martin <br/> James</span>
                {/* <span style={{ color: "white", display: "block" }}>James</span> */}
              </div>
            </div>
            <div style={{display:'flex', gap:'5px', paddingTop:'5px'}}>
              <Button style={style.btnCopn}>
                <img src={Group} style={{ objectFit: "contain", marginRight: 5 }}
                  alt="Group" />
                <span style={{ borderLeft: "1px dashed black", paddingLeft: "5px", }} >
                  0
                </span>
              </Button>
              
              <Button style={style.btnCopn}>
                <span style={{paddingRight:"5px"}}>Coupons</span>
                <span style={{ borderLeft: "1px dashed black", paddingLeft: "5px",}}>
                  0
                </span>
              </Button>
            </div>
            
          </div>
          {/* third bottom */}
          {OLODISABLE === true && (
            <div style={style.headBottm}>
              <div style={{display:'flex',justifyContent:'space-between', alignItems:'center', gap:'10px'}}>
                <img src={OLO} alt="OLO" style={{}} />

                <div style={style.finlenTxt}>
                  <span className="restaurant-name">Olo</span>
                  <span className="location">Helsinki, Finland</span>
                </div>
              </div>
              
              <Button style={{backgroundColor:'white', border:'2px solid #DCCBFF', color:'black', height:'fit-content'}}>
                <img src={bell} alt="follow"/> <span> Follow </span>
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
    </>
  );
}

export default OnboardHeader;
const style = {
  headtop: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
    padding:'10px 20px',
    alignItems:'center'
  },
  oloimg: {
    width: "auto",
    height: 50,
    objectFit: "contain",
    backgroundColor:'white',
    borderRadius:"100%"
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
  },
};
