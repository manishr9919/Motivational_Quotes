import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "10px" }}>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "dark" ? "#fdd835" : "#424242",
          color: theme === "dark" ? "black" : "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
