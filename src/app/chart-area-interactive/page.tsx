'use client'
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import UpdateData from "@/lib/update-data";

const InteractiveChart = () => {
  return (
    <div>
      <div className="m-2">
        <Button variant={"secondary"} asChild>
          {/* <button onClick={UpdateData}></button>   */}
        </Button>
      </div>
      <ChartAreaInteractive></ChartAreaInteractive>
      <div className="m-2">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default InteractiveChart;