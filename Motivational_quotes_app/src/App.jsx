import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./componants/QuoteCard";
import QuoteButton from "./componants/QuoteButton";
import ThemeToggle from "./componants/ThemeToggle";

const App = () => {
  const [quoteData, setQuoteData] = useState({ advice:"",a:""});
  const [liked, setLiked] = useState(false);
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  const fetchQuote = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      // console.log(res);
      setQuoteData(res.data.slip);
      console.log(res.data.slip.advice);

      setLiked(false);
    } catch (error) {
      setQuoteData({ advice: "Could not fetch quote.", a: "Unknown" });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const themeStyles = {
    light: {
      backgroundColor: "#f0f8ff",
      color: "#000",
    },
    dark: {
      backgroundColor: "#121212",
      color: "#fff",
    },
  };

  return (
    <div
      style={{
        ...themeStyles[theme],
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        QuoteSage – A Daily Quote Generator
      </h1>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <ThemeToggle
          theme={theme}
          toggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>

      <QuoteCard
        quote={quoteData.advice}
        author={quoteData.a}
        liked={liked}
        onLikeToggle={() => setLiked(!liked)}
        theme={theme}
        fontSize={fontSize}
        // setLiked={setLiked}
      />

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <QuoteButton onClick={fetchQuote} label="New Quote" />

        <div style={{ marginTop: "10px" }}>
          <label htmlFor="fontSize">Font Size:</label>
          <select
            id="fontSize"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            style={{ marginLeft: "10px", padding: "4px" }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
