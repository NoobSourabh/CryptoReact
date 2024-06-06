import { gettingDate } from "./getDate";

export const settingChartData = (setChartData, price) => {
  console.log("price 0", Date(price[0])),
    setChartData({
      labels: price.map(([price]) => gettingDate(price[0])),
      datasets: [
        {
          data: price.map((price) => price[1]),
          borderWidth: 1,
          fill: true,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "#3a80e9",
          pointRadius: 0,
          // yAxisID: "crypto1",
        },
      ],
    });
};
