import { ChartAreaInteractive } from "@/components/chart-area-interactive-element";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UpdateData from "@/lib/update-data";
import { NewsCard } from "@/components/addnews";
import NewsSection from "@/components/news-section";
import { getData } from "@/lib/chart-data";
import { Badge } from "@/components/ui/badge";

const data = await getData();

const chartData = await data[0];
const newsData = await data[1];

const InteractiveChart = () => {

  return (
    <div>
      <div className="flex justify-between">
        <div className="m-2">
          {/* <Button variant={"secondary"} asChild>
          <button onClick={UpdateData}></button>  
          </Button> */}
        </div>
        <div>
          <ChartAreaInteractive data={chartData}></ChartAreaInteractive>
        </div>
        <div className="w-[25vw]">
          <NewsCard></NewsCard>
        </div>
      </div>
      <div className="m-2">
        <ModeToggle></ModeToggle>
        <Badge className="text-[1rem] bg-blue-500 text-white dark:bg-blue-600" variant={"secondary"}>Historical News</Badge>
      </div>
      <div>
        <NewsSection data={newsData}></NewsSection>
      </div>
    </div>
  );
};

export default InteractiveChart;