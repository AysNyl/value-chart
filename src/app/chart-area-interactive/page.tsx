'use client'
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UpdateData from "@/lib/update-data";
import { NewsCard } from "@/components/addnews";
import NewsSecton from "@/components/news-section";

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
          <ChartAreaInteractive></ChartAreaInteractive>
        </div>
        <div className="w-[25vw]">
          <NewsCard></NewsCard>
        </div>
      </div>
      <div className="m-2">
        <ModeToggle></ModeToggle>
      </div>
      <div>
        <NewsSecton></NewsSecton>
      </div>
    </div>
  );
};

export default InteractiveChart;