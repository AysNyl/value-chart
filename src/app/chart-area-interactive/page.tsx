import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const InteractiveChart = () => {
  return (
    <div>
      <div className="m-2">
        <Button variant={"secondary"}><a href="https://www.nseindia.com/api/historicalOR/cm/equity?symbol=TATACONSUM&series=[%22EQ%22]&from=24-09-2024&to=24-09-2025&csv=true">Update</a></Button>
      </div>
      <ChartAreaInteractive></ChartAreaInteractive>
      <div className="m-2">
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default InteractiveChart;