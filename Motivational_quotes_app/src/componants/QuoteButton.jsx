import React from "react";

const QuoteButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#6200ea",
        color: "white",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "10px",
      }}
    >
      {label}
    </button>
  );
};

export default QuoteButton;
