import React, { useState } from "react";

import CooponsImg from "../assets/icons/coopons.png";
import { FaInfoCircle } from "react-icons/fa";
import LoginModal from "./InfoModal";
const Coopons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div style={style.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            flexGrow: 1,
            textAlign: "center",
            marginLeft: "50px",
            fontWeight: "bold",
            fontSize: "24px",
            color: "#000000",
          }}
        >
          Coopons
        </span>
        <FaInfoCircle
          style={{ marginRight: "30px" }}
          size={24}
          color="#25026E"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <img
        src={CooponsImg}
        alt="Star Pattern"
        className="start-img"
        style={{ width: "auto", height: "auto" }} // Adjust width and height as needed
      />
      <img
        src={CooponsImg}
        alt="Star Pattern"
        className="start-img"
        style={{ width: "auto", height: "auto" }} // Adjust width and height as needed
      />
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Coopons;
const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    flexDirection: "column",
  },
};
