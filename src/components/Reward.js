import React, { useEffect, useState } from 'react'
import bg from "../assets/images/rewardBg.png"
import header from "../assets/icons/header.png"

const Reward = ({showPopup, onClose, countText}) => {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    };
  
    const pFontSize = countText?.length <= 8 ? '26px' : '15px';

  if (!showPopup) return null;

  return (
    <div style={{
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      zIndex: 1000, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'}}>
      
        <div style={{background: "linear-gradient(90deg, #2D008C, #25046B)", width: "100%", height: "auto", position:'relative', maxWidth: '500px', padding: '20px 0'}}>
            <img src={bg} alt="background" style={{width: "100%", height: "100vh", padding:'20px 0', objectFit: "contain"}} />
            
            <div style={{ position: "absolute", width:'55%', top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white", }} >
            <span style={{ position: "absolute", width:'5%', top: "-2%", right: "-5%",  color: "white", fontSize:'25px', cursor:'pointer',  fontWeight:'bolder',backgroundColor:'transparent'}} onClick={onClose}> X </span>

            <h4 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}>
              Congratulations
            </h4>

            <p style={{ fontSize: pFontSize, fontWeight:'bold', margin: "10px 0" }}>  {countText || `3 / 9`} </p>
            <img src={header} alt="header" style={{ width: "81px", height: "77px", margin: "10px 0" }}
            />
            <h2 style={{ fontSize: "12px", margin: "50px 0 0 0", fontWeight: "normal"}}>
              Coupon valid 15 minutes from activation
            </h2>
            <div style={{ fontSize: "80px", marginTop: "20px", fontWeight:'bold' }}>  {formatTime(timeLeft)}</div>

            <span style={{ fontSize: "16px",marginTop:'-15px', fontWeight:'bold', display: "block" }}>
              Coupon is active
            </span>

            <div style={{ fontSize: "14px", marginTop: "120px", fontWeight: "normal", }} >
              Show the coupon to the cashier after activation
            </div>
          </div>
            
        </div>
        
    </div>
  )
}

export default Reward
