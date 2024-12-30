import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <a className="home-coin">
      <Link to={`/${coin.id}`}>
        <span className="home-coin-img">
          <img src={coin.image} alt="home-coin-image" />
        </span>
        <span className="home-coin-name">{coin.name}</span>
        {coin.priceBtc && (
          <span className="home-coin-price">
            <span className="home-coin-usd">{coin.priceUsd}USD</span>
            <span className="home-coin-btc">
              <img src="/bitcoin-btc-logo.png" alt="" />
              {coin.priceBtc}BTC
            </span>
          </span>
        )}
      </Link>
    </a>
  );
}
