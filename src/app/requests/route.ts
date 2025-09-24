import { writeFile } from "fs/promises";

// export async function GET(req: Request) {
//     const response = await fetch("https://www.nseindia.com/get-quotes/equity?symbol=TATACONSUM#");
//     await writeFile("C:/Users/Aynay/market-analyzer/_data/TATACONSUM.csv", response.text)
// }

// import { writeFile } from "fs/promises";
// import path from "path";





export async function GET() {
    return Response.json({message: "This is data fetching api route"});
}

export async function POST(request: Request) {
    const filepath: string = "https://www.nseindia.com/api/historicalOR/cm/equity?symbol=TATACONSUM&series=[%22EQ%22]&from=24-09-2024&to=24-09-2025&csv=true";
    const csv = await fetch(filepath)
    const csvdata = await csv.text();
    // console.log(csvdata);
    await writeFile("./_data/check.csv", csvdata);
    return new Response(JSON.stringify({message: "data fetched"}));
}