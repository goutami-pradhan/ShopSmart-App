import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [theme, setTheme] = useState("light");

  const renderPage = () => {
    switch (currentPage) {
      case "about": return <About />;
      case "contact": return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        theme={theme} 
        setTheme={setTheme} 
      />
      <main style={{ padding: "20px" }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
