import React, { useState } from "react";
import OnboardHeader from "../components/OnboardHeader";

import LoyaltyCard from "../assets/icons/loyaltyCard.png";
import Restro from "../assets/icons/restro.png";
import FreeBeer from "../assets/icons/freeBeer.png";
import Food from "../assets/icons/food30.png";
import { FaChevronDown, FaInfoCircle } from "react-icons/fa";
import MyPageInfo from "../components/MyPageInfo";
import UnFollow from "../components/Unfollow";

const items = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    title: "BASBAS",
    description: "Counter & dining",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    title: "var",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    title: "KASKIS",
    description: "Dining",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/100",
    title: "GRON",
    description: "Dining",
  },
];
const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [UnFollows, setIsUnfollow] = useState(false);
  const [coopn, setCoops] = useState(false);
  return (
    <>
      <OnboardHeader disabled={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          margin: 10,
        }}
      >
        <h3 style={{ color: "#000000" }}>Welcome to Tagis!</h3>
        <p style={{ width: "90%", fontSize: 17, color: "#000000" }}>
          Your go-to app for restaurant coupons from a variety of dining spots.
          Save big on your next meal!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            width: "80%",
          }}
        >
          <h3 style={{ marginLeft: "20px" }}>Coopons</h3>
          <FaInfoCircle
            size={24}
            color="#25026E"
            onClick={() => {
              setIsModalOpen(true);
              setCoops(true);
            }}
          />
        </div>
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
          <img
            src={LoyaltyCard}
            alt="Coupon 1"
            style={{ objectFit: "contain" }}
          />
          <img src={FreeBeer} alt="Coupon 2" style={{ objectFit: "contain" }} />
          <img src={Food} alt="Coupon 3" style={{ objectFit: "contain" }} />
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

      <div style={styles.verticalList}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginTop: 15,
          }}
        >
          <h3 style={{ marginLeft: "30px" }}>My Places</h3>
          <FaInfoCircle
            size={24}
            color="#25026E"
            onClick={() => {
              setIsModalOpen(true);
              setCoops(false);
            }}
          />
        </div>
        {items.map((item) => (
          <div style={styles.listItem} key={item.id}>
            <img src={Restro} alt={item.title} style={styles.itemImage} />
            <div style={styles.itemContent}>
              <h3 style={styles.itemTitle}>{item.title}</h3>
              <p style={styles.itemDescription}>{item.description}</p>
            </div>
            <div style={styles.itemButtons}>
              <button style={styles.button}>VIEW COUPONS</button>
              <button style={styles.button} onClick={() => setIsUnfollow(true)}>
                UNFOLLOW
              </button>
            </div>
          </div>
        ))}
        <button style={styles.showMore}>
          See More
          <FaChevronDown style={{ marginLeft: "10px" }} />
        </button>
      </div>

      <MyPageInfo
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        coops={coopn}
      />

      <UnFollow isModalOpen={UnFollows} setIsModalOpen={setIsUnfollow} />
    </>
  );
};

export default MyPage;
const styles = {
  verticalList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "90%",
    margin: "10 ",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    margin: "0 0 10px 0",
    fontSize: "18px",
    color: "#000000",
  },
  itemDescription: {
    margin: "0",

    color: "#000000",
  },
  itemButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#25026E",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  showMore: {
    display: "block",
    margin: "20px auto 0 auto",
    padding: "10px 20px",
    backgroundColor: "#25026E",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
