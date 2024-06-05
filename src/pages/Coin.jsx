import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
function CoinPage() {
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        console.log("response", response.data);
        setisLoading(false);
        coinObject(setCoinData, response.data);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
      });
  }, [id]);

  return (
    <div>
      <Header />(
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
                      </div>
                      <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
