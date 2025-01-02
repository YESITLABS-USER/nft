import React from "react";

const CustomButton = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={style.containerStyle}>
      <button
        style={
          isHovered
            ? {
                ...style.buttonStyle,
                ...style.hoverStyle,
              }
            : style.buttonStyle
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CustomButton;

const style = {
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  buttonStyle: {
    backgroundColor: "#2A0181",
    color: "white",
    borderRadius: "30px",
    width: "140px",
    height: "50px",
    border: "none",
    cursor: "pointer",
  },
  hoverStyle: {
    backgroundColor: "#4b1ead",
  },
};
