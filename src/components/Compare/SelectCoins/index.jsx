import React, { useState, useEffect } from "react";
import "./styles.css";
import { MenuItem, Select } from "@mui/material";
import { get100Coins } from "../../../functions/get100Coins";

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
    // console.log(myCoins);
  }
  return (
    <div className="coins-flex">
      <p> Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins.map((coin, i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
      <p> Crypto 2</p>

      <Select
        sx={styles}
        value={crypto2}
        label="crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins.map((coin, i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectCoins;
