import React from "react";

function Header({ currentPage, setCurrentPage}){
    return(
        <header style={styles.header}>
            <h1 style={styles.logo}> ShopSmart</h1>
            <nav style={styles.nav}></nav>
            <button onClick={()=> setCurrentPage("home")}>Home</button>
            <button onClick={()=> setCurrentPage("about")}>About</button>
            <button onClick={()=> setCurrentPage("contact")}>Contact</button>
        </header>
    );
}
const styles={
    header:{display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color:"#fff"},
    logo: {margin: 0},
    nav: {display: "flex", gap: "10px"}
};

export default Header;