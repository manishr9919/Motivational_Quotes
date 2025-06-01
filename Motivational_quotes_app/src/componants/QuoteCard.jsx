import React from "react";

const QuoteCard = ({ quote, author, fontSize, theme, liked, onLikeToggle }) => {
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto",
        maxWidth: "600px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <p style={{ fontSize, fontStyle: "italic",color:"red" }}>"{quote}"</p>
      <p style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold" }}>
        - {author}
      </p>
      <button
        onClick={onLikeToggle}
        style={{
          fontSize: "1.5rem",
          cursor: "pointer",
          border: "none",
          background: "none",
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default QuoteCard;
