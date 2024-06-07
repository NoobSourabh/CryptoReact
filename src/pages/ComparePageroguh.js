// import React, { useEffect, useState } from "react";
// import Header from "../components/Common/Header";
// import Loader from "../components/Common/Loader";
// import List from "../components/Dashboard/List";
// import SelectCoins from "../components/Compare/SelectCoins";
// import { getCoinData } from "../functions/getCoinData";
// import { getCoinPrices } from "../functions/getCoinPrices";
// import { settingChartData } from "../functions/settingChartData";
// import { coinObject } from "../functions/coinObject";
// import CoinInfo from "../components/Coin/CoinInfo";
// import LineChart from "../components/Coin/LineChart";
// import PriceType from "../components/Coin/PriceType";
// import { get100Coins } from "../functions/get100Coins";

// function ComparePage() {
//   const [allCoins, setAllCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // id states
//   const [crypto1, setCrypto1] = useState("bitcoin");
//   const [crypto2, setCrypto2] = useState("ethereum");
//   // data states
//   const [coin1Data, setCoin1Data] = useState({});
//   const [coin2Data, setCoin2Data] = useState({});
//   // days state
//   const [days, setDays] = useState(30);
//   const [priceType, setPriceType] = useState("prices");
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     // setLoading(true);
//     const coins = await get100Coins();
//     if (coins) {
//       setAllCoins(coins);
//       const data1 = await getCoinData(crypto1);
//       const data2 = await getCoinData(crypto2);
//       coinObject(data1, setCoin1Data);
//       coinObject(data2, setCoin2Data);
//       if (data1 && data2) {
//         // getCoinPrices
//         const prices1 = await getCoinPrices(crypto1, days, priceType);
//         const prices2 = await getCoinPrices(crypto2, days, priceType);
//         settingChartData(setChartData, prices1, prices2);
//         setLoading(false);
//       }
//     }
//   };

//   const onCoinChange = async (e, isCoin2) => {
//     setLoading(true);
//     if (isCoin2) {
//       const newCrypto2 = e.target.value;
//       // crypto2 is being changed
//       setCrypto2(newCrypto2);
//       // fetch coin2 data
//       const data2 = await getCoinData(newCrypto2);
//       coinObject(data2, setCoin2Data);
//       // fetch prices again
//       const prices1 = await getCoinPrices(crypto1, days, priceType);
//       const prices2 = await getCoinPrices(newCrypto2, days, priceType);
//       settingChartData(setChartData, prices1, prices2);
//     } else {
//       const newCrypto1 = e.target.value;
//       // crypto1 is being changed
//       setCrypto1(newCrypto1);
//       // fetch coin1 data
//       const data1 = await getCoinData(newCrypto1);
//       coinObject(data1, setCoin1Data);
//       // fetch coin prices
//       const prices1 = await getCoinPrices(newCrypto1, days, priceType);
//       const prices2 = await getCoinPrices(crypto2, days, priceType);
//       settingChartData(setChartData, prices1, prices2);
//     }
//     setLoading(false);
//   };

//   const handleDaysChange = async (e) => {
//     const newDays = e.target.value;
//     setLoading(true);
//     setDays(newDays);
//     const prices1 = await getCoinPrices(crypto1, newDays, priceType);
//     const prices2 = await getCoinPrices(crypto2, newDays, priceType);
//     settingChartData(setChartData, prices1, prices2);
//     setLoading(false);
//   };

//   const handlePriceTypeChange = async (e) => {
//     const newPriceType = e.target.value;
//     setLoading(true);
//     setPriceType(newPriceType);
//     const prices1 = await getCoinPrices(crypto1, days, newPriceType);
//     const prices2 = await getCoinPrices(crypto2, days, newPriceType);
//     settingChartData(setChartData, prices1, prices2);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <Header />
//       <Loader />
//       {loading || !coin1Data?.id || !coin2Data?.id ? (
//         <Loader />
//       ) : (
//         <>
//           <SelectCoins
//             allCoins={allCoins}
//             crypto1={crypto1}
//             crypto2={crypto2}
//             onCoinChange={onCoinChange}
//             days={days}
//             handleDaysChange={handleDaysChange}
//           />
//           <div className="grey-wrapper">
//             <List coin={coin1Data} />
//           </div>
//           <div className="grey-wrapper">
//             <List coin={coin2Data} />
//           </div>
//           <div className="grey-wrapper">
//             <PriceType
//               priceType={priceType}
//               handlePriceTypeChange={handlePriceTypeChange}
//             />
//             <LineChart chartData={chartData} multiAxis={true} />
//           </div>
//           <CoinInfo title={coin1Data.name} desc={coin1Data.desc} />
//           <CoinInfo title={coin2Data.name} desc={coin2Data.desc} />
//         </>
//       )}
//     </div>
//   );
// }

// export default ComparePage;
