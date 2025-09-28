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
  CH_52WEEK_LOW_PRICE: number,
  news: string,
  indicator: number;
};

interface Analysis {
  relevancy_analysis: string,
  relevancy_score: number
}

interface News {
  id: string,
  date: string,
  title: string,
  text: string,
  analysis: Analysis[]
};

async function getData(): Promise<[Promise<Data[]>, Promise<News[]>]> {
  const quotes = await fetch('http://localhost:4000/data');
  const news = await fetch('http://localhost:5000/news');
  const result = await quotes.json()
  const result1 = await news.json()

  const minPrice = Math.min(...result.flatMap((item: Data) => [item.CH_CLOSING_PRICE]));
  const maxPrice = Math.max(...result.flatMap((item: Data) => [item.CH_CLOSING_PRICE]));
  result.forEach((quote: Data) => {
    const matchingDate = result1.find((news: News) => news.date == quote.CH_TIMESTAMP);
    console.log(matchingDate)
    if (matchingDate) {
      quote.news = matchingDate.text;
      quote.indicator = matchingDate.analysis[0].relevancy_score*(maxPrice-minPrice)+minPrice+10;
    }
    else {
      quote.news = "";
      quote.indicator = 0;
    }
  })
  // console.log(result);
  result.sort((a: Data, b: Data) => a.CH_TIMESTAMP.localeCompare(b.CH_TIMESTAMP))
  return [result, result1];
}

export {type Data, type News, getData};