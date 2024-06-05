import React, { useState } from "react";
import "./styles.css";
function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 300) +
    "<br/><p style='color:var(--grey);cursor:pointer;'>Read More...</p>";
  const longDesc =
    desc + "<br/><p style='color:var(--grey);cursor:pointer;'>Read Less...</p>";

  const [toggle, setToggle] = useState(false);

  return (
    <div className="grey-wrapper">
      <h2 className="coin-info-heading">{heading}</h2>
      <p className="coin-info-desc"
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
        }}
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default CoinInfo;
