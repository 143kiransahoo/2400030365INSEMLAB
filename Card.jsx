import React from "react";

function Card({ children }) {
  const cardStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    backgroundColor: "#f9f9f9",
  };

  return <div style={cardStyle}>{children}</div>;
}

export default Card;
