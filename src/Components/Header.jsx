import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header({ currentPage, setCurrentPage, theme, setTheme }) {
  return (
    <header style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      padding: "10px", 
      background: theme === "light" ? "#282c34" : "#111", 
      color: "#fff" 
    }}>
      <h1>ShopSmart</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}

export default Header;
