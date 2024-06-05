import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import Tooltip from "@mui/material/Tooltip";
import { convertNumber } from "../../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({ coin, key }) {
  return (
    // <Link to={}>
    <tr className="list-row">
    <Tooltip title="Coin logo">
    <td className="td-image">
    <img src={coin.image} className="coin-logo" />
    </td>
    </Tooltip>
    <Tooltip title="Coin info" placement="bottom-start">
    <td>
    <div className="name-col">
    <p className="coin-symbol">{coin.symbol}</p>
    <p className="coin-name">{coin.name}</p>
    </div>
    </td>
    </Tooltip>
    <Tooltip title="Price Change in 24 h" placement="bottom-start">
    {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
            </div>
            </td>
          ) : (
            <td className="chip-flex">
            <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="red-icon-chip td-icon">
            <TrendingDownRoundedIcon />
            </div>
            </td>
          )}
          </Tooltip>
          <Tooltip title="Current Price">
          <td>
          <h3
            className="coin-price td-center-align"
            style={{
              color:
              coin.price_change_percentage_24h < 0
              ? "var(--red)"
              : "var(--green)",
            }}
            >
            ${coin.current_price.toLocaleString()}
            </h3>
            </td>
            </Tooltip>
            
            <Tooltip title="Total Volume">
            <td className="desktop-td-vol">
            <p className="total_volume td-right-align td-total-vol">
            {coin.total_volume.toLocaleString()}
            </p>
            </td>
            </Tooltip>
            <Tooltip title="Total Volume">
        <td className="mobile-td-vol">
          <p className="total_volume td-right-align td-total-vol">
          {convertNumber(coin.total_volume)}
          </p>
          </td>
          </Tooltip>
          <Tooltip title="Market Cap ">
          <td className="desktop-td-mkt">
          <p className="market_cap td-right-align">
          ${coin.market_cap.toLocaleString()}
          </p>
          </td>
          </Tooltip>
          
          <Tooltip title="Market Cap ">
          <td className="mobile-td-mkt">
          <p className="market_cap td-right-align">
          {convertNumber(coin.market_cap)}
          </p>
          </td>
          </Tooltip>
          </tr>
          // </Link>
        );
      }

      export default List;
      