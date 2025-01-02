import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";
import Logo from "../assets/icons/logo1.png";

function AboutService() {
  const [activeTab, setActiveTab] = useState("coupons"); // Default to 'coupons'

  // Function to handle button clicks
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
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
        <div style={{}}>
          <button
            onClick={() => handleTabChange("coupons")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "coupons" ? "#E7DCFF" : "white",
              color: activeTab === "coupons" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            COUPONS
          </button>
          <button
            onClick={() => handleTabChange("giveaways")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "giveaways" ? "#E7DCFF" : "white",
              color: activeTab === "giveaways" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            GIVE AWAYS
          </button>
          <button
            onClick={() => handleTabChange("events")}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: activeTab === "events" ? "#E7DCFF" : "white",
              color: activeTab === "events" ? "#2D008C" : "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            EVENTS
          </button>
        </div>

        {/* Display Content Based on Active Tab */}
        <div>
          {activeTab === "coupons" ? (
            <div>
              <p>
                Tap the NFC tag and claim your rewards! When you participate in
                a company’s campaign, you can collect coupons directly on your
                phone without downloading any apps. You’ll earn coupons by
                leaving reviews or tapping regularly at a company’s tags. Each
                campaign can work differently – some will give you a coupon for
                every tap, and others, for example, after every 5 taps. All your
                coupons are stored in your personal wallet, and you can easily
                redeem them by showing your phone at checkout. Remember to check
                the campaign’s terms and conditions for validity!
              </p>
            </div>
          ) : activeTab === "giveaways" ? (
            <div>
              <p>
                By tapping, you automatically participate in NFC Media’s monthly
                raffles! Every tap earns you a raffle ticket, increasing your
                chances of winning fantastic prizes such as gift cards, trips,
                or other amazing rewards. Raffles are held monthly, and the more
                you tap, the better your chances of winning. Winners will be
                contacted personally, and their names will be published on our
                raffle page. Even if you don’t receive a coupon every time you
                tap, you’ll always collect a raffle ticket – so tap whenever you
                see an NFC tag!
              </p>
            </div>
          ) : (
            <div>
              <p>
                Join the fun with NFC Media events! Participate in exciting
                activities like NFC tag hunts or student events. At these
                events, you can collect special coupons, or receive unique
                rewards. Events are held in various locations, and participation
                is easy – just tap the tags along the way and start collecting
                benefits. Stay updated on upcoming events and join the hunt for
                your next great find!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutService;
