// import React, { useEffect, useState } from "react";
// import "./App.css";
// import LoginPage from "./pages/LoginPage";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignupPage from "./pages/SignupPage";
// import Dashboard from "./pages/Dashboard";
// import ContactFaq from "./pages/Contact&Faq";
// import MyPage from "./pages/MyPage";
// import TermCondn from "./pages/Term&Condn";
// import AboutService from "./pages/AboutService";
// import MyProfile from "./pages/MyProfile";
// import BackgroundImg from "./assets/images/backgrounImg.png";
// import Logo from "./assets/icons/logo.png";

// import SplashImg from "./assets/images/splashScreen.png";

// function App() {
//   const [isMobile, setIsMobile] = useState(false); // State for mobile detection
//   const [showSplash, setShowSplash] = useState(true);
//   // const [showAddToHome, setShowAddToHome] = useState(false); // State for showing the "Add to Home" button

//   useEffect(() => {
//     // Check if the user is on a mobile device
//     const checkDeviceType = () => {
//       const isMobileDevice = window.innerWidth <= 768; // Example breakpoint for mobile
//       setIsMobile(isMobileDevice);
//     };

//     // Initial check on component mount
//     checkDeviceType();

//     // Listen for window resize to update the device type
//     window.addEventListener("resize", checkDeviceType);

//     // Cleanup event listeners on unmount
//     return () => {
//       window.removeEventListener("resize", checkDeviceType);
//     };
//   }, []);

//   useEffect(() => {
//     // Splash screen timeout
//     const splashTimer = setTimeout(() => {
//       setShowSplash(false); // Hide splash screen after 3 seconds
//     }, 3000);

//     return () => clearTimeout(splashTimer); // Cleanup timer on component unmount
//   }, []);

//   // const handleAddToHome = () => {
//   //   // You can implement the logic to prompt the user to add the app to the home screen
//   //   alert("Add this app to your home screen!");
//   // };

//   if (showSplash && isMobile) {
//     // Splash screen content with a background image
//     return (
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage: `url(${SplashImg})`, // Add the background image
//           backgroundSize: "cover", // Cover the entire div
//           backgroundPosition: "center", // Center the image
//           backgroundRepeat: "no-repeat", // Prevent repetition
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           color: "white",
//           zIndex: 1000,
//         }}
//       ></div>
//     );
//   }

//   return (
//     <Router>
//       <div>
//         {/* Show the message for desktop users */}
//         {!isMobile && (
//           <div
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//               backgroundImage: `url(${BackgroundImg})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               color: "white",
//               display: "flex",
//               flexDirection: "column", // Arrange children in a column
//               justifyContent: "center", // Vertically center the content
//               alignItems: "center", // Horizontally center the content
//               textAlign: "center",
//               fontSize: "1.5em",
//               padding: "20px",
//               zIndex: 1000,
//             }}
//           >
//             <img src={Logo} alt="Logo" />
//             <span
//               style={{ marginBottom: "10px", fontSize: 28, fontWeight: 500 }}
//             >
//               Welcome to Tagis!
//             </span>
//             <span style={{ fontSize: 35, fontWeight: 500 }}>
//               Please open in your mobile phone for better experience
//             </span>
//           </div>
//         )}

//         {/* Show the "Add to Home" button for mobile view */}
//         {/* {isMobile && (
//           <button
//             onClick={handleAddToHome}
//             style={{
//               position: "fixed",
//               bottom: "20px",
//               left: "50%",
//               transform: "translateX(-50%)",
//               padding: "10px 20px",
//               backgroundColor: "#2A0181",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               fontSize: "1.2em",
//               cursor: "pointer",
//               zIndex: 999,
//             }}
//           >
//             ADD TO HOME
//           </button>
//         )} */}

//         {/* Your Routes */}
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/contactFaq" element={<ContactFaq />} />
//           <Route path="/mypage" element={<MyPage />} />
//           <Route path="/termCondn" element={<TermCondn />} />
//           <Route path="/aboutService" element={<AboutService />} />
//           <Route path="/myprofile" element={<MyProfile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
//

//

//
//

import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import ContactFaq from "./pages/Contact&Faq";
import MyPage from "./pages/MyPage";
import TermCondn from "./pages/Term&Condn";
import AboutService from "./pages/AboutService";
import MyProfile from "./pages/MyProfile";
import BackgroundImg from "./assets/images/backgrounImg.png";
import Logo from "./assets/icons/logo.png";

import SplashImg from "./assets/images/splashScreen.png";
import Loyality from "./pages/Loyality";

function App() {
  const [isMobile, setIsMobile] = useState(false); // State for mobile detection
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const checkDeviceType = () => {
      const isMobileDevice = window.innerWidth <= 768; // Example breakpoint for mobile
      setIsMobile(isMobileDevice);
    };

    // Initial check on component mount
    checkDeviceType();

    // Listen for window resize to update the device type
    window.addEventListener("resize", checkDeviceType);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", checkDeviceType);
    };
  }, []);

  useEffect(() => {
    // Check if the splash screen has already been shown
    const splashShown = localStorage.getItem("splashShown");

    if (!splashShown) {
      // If not shown, show splash screen and set the flag
      setShowSplash(true);
      const splashTimer = setTimeout(() => {
        setShowSplash(false); // Hide splash screen after 3 seconds
        localStorage.setItem("splashShown", "true"); // Save the flag
      }, 3000);

      return () => clearTimeout(splashTimer); // Cleanup timer on component unmount
    }
  }, []);

  if (showSplash && isMobile) {
    // Splash screen content with a background image
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${SplashImg})`, // Add the background image
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repetition
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          zIndex: 1000,
        }}
      ></div>
    );
  }

  return (
    <Router>
      <div>
        {/* Show the message for desktop users */}
        {!isMobile && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${BackgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              display: "flex",
              flexDirection: "column", // Arrange children in a column
              justifyContent: "center", // Vertically center the content
              alignItems: "center", // Horizontally center the content
              textAlign: "center",
              fontSize: "1.5em",
              padding: "20px",
              zIndex: 1000,
            }}
          >
            <img src={Logo} alt="Logo" />
            <span
              style={{ marginBottom: "10px", fontSize: 28, fontWeight: 500 }}
            >
              Welcome to Tagis!
            </span>
            <span style={{ fontSize: 35, fontWeight: 500 }}>
              Please open in your mobile phone for better experience
            </span>
          </div>
        )}

        {/* Your Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactFaq" element={<ContactFaq />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/termCondn" element={<TermCondn />} />
          <Route path="/aboutService" element={<AboutService />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/loyality" element={<Loyality />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
