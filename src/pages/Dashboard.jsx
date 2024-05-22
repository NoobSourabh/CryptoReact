import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100"
      )
      .then((response) => {
        // console.log("Response", response);
        setCoins(response.data)
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={ coins} />
    </div>
  );
}

export default DashboardPage;
