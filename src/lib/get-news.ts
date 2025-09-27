// 'use server'
import { readFile } from "fs"

interface News {
  date: string,
  change: number,
  event: string,
};

export async function getNews(): Promise<News[]> {
  await new Promise((resolve) => setTimeout(resolve, 7000));
  const result = await fetch('http://localhost:5000/news');
  // delay response
  // readFile("./_data/news.json", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log("error: ", err);
  //     return [];
  //   } else {
  //     return JSON.parse(data).news;
  //   }
  // }
  // );

  return result.json();
}
