This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install all dependencies:
```bash
npm install
```
Second, launch the json server to serve json files:
```bash
npm run serve:all
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## About the project

- This project is a stock market news relevancy analyzer application built with Next.js. 
- It fetches historical stock data with the help of Rest APIs, the related news articles are provided through the html form.
- It performs AI analysis on the news content to check the relevancy of the news with the targeted stock.
- And visualizes the data using interactive charts.
- News are also plotted along with the price movement chart.
- The application aims to help users make informed investment decisions by providing insights into stock performance and relevant news events.
- Currently the project is limited to single stock (Tatamotors), future updates will be made to make it more general purpose.

## Note
- You can fetch stock data By send a API POST request to requests path.
- New Data need to be provided through the form in the home page.

## API
- This project uses gemini api key to run relevancy analysis.
- It can be provided through by creating .env.local file in your project directory,
with the following contents:
```text
GEMINI_API_KEY=your_api_key
URL=fetch_file_url
```

## Data
- The stock data is fetched from nseindia.com (via api)
- I have also provided some sample data for the project.
