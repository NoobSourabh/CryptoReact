import React from "react";
import "./styles.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";

function Header() {
  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker <span style={{ color: "var(--blue)" }}></span>
      </h1>

      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">Watchlist</p>
        </a>
        <a href="#">
          <Button outlined={true} text={"Dashboard"} onClick={()=>console.log('btn clicked')} />
        </a>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
