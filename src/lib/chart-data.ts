// const ChartData = async () => {
//     const response = await fetch("http:/localhost:3000/requests");
//     const chartData = await response.json();
//     // console.log(chartData["data"]);
//     return chartData.data;
// }

// export default ChartData;

interface Data {
    CH_SYMBOL: string,
    CH_SERIES: string,
    CH_TIMESTAMP: string,
    CH_PREVIOUS_CLS_PRICE: number,
    CH_OPENING_PRICE: number,
    CH_TRADE_HIGH_PRICE: number,
    CH_TRADE_LOW_PRICE: number,
    CH_LAST_TRADED_PRICE: number,
    CH_CLOSING_PRICE: number,
    VWAP: number,
    CH_TOT_TRADED_QTY: number,
    CH_TOT_TRADED_VAL: number,
    CH_TOTAL_TRADES: number,
    CH_52WEEK_HIGH_PRICE: number,
    CH_52WEEK_LOW_PRICE: number
};

async function getData(): Promise<Data[]>  {
  const result = await fetch('http://localhost:4000/data');

  return result.json();
}

export default getData;