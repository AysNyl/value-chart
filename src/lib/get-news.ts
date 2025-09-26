interface News {
  date: string,
  change: number,
  event: string,
};

export async function getNews(): Promise<News[]>  {
  const result = await fetch('http://localhost:5000/news');
  // delay response
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return result.json();
}
