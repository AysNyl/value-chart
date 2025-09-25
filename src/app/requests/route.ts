import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

// export async function GET(req: Request) {
//     const response = await fetch("https://www.nseindia.com/get-quotes/equity?symbol=TATACONSUM#");
//     await writeFile("C:/Users/Aynay/market-analyzer/_data/TATACONSUM.csv", response.text)
// }

// import { writeFile } from "fs/promises";
// import path from "path";





export async function GET() {
    // readFile("./_data/check.json", (error, data) => {
    //     if (error) {
    //         console.log('Error reading file:', error);
    //         return
    //     }
    //     return new Response(JSON.parse(data.toString())["data"]);
    // })
    // return Response.json({message: "This is data fetching api route"});
    try {
        const data = await readFile("./_data/check.json", "utf-8")
        // console.log(JSON.parse(data.toString())["data"]);
        return new Response(data.toString());
    } catch (error) {
        console.log("Error during data fetching:", error)
        return Response.json({message: "There was an error"});
    }
    return new Response(JSON.stringify({message: "error fetching data"}), {status: 500});
}

export async function POST(request: Request) {
    const filepath: string = "https://www.nseindia.com/api/historicalOR/cm/equity?symbol=TATACONSUM&series=[%22EQ%22]&from=24-09-2024&to=24-09-2025&json=true";
    const response = await fetch(filepath)
    const jsondata = await response.json();
    // console.log(csvdata);
    await writeFile("./_data/check.json", JSON.stringify(jsondata));
    return new Response(JSON.stringify({message: "data fetched"}));
}