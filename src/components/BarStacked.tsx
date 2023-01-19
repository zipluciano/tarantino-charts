import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { shareOfCharacters } from "../utils/tartantinoData";
import ChartWrapper from "./ChartWrapper";

export default function BarStacked() {
  const data = shareOfCharacters;

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: datum => datum.primary,
      position: "left"
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: datum => datum.secondary,
        position: "bottom",
        stacked: true
      }
    ],
    []
  );

  return (
    <ChartWrapper>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes
        }}
      />
    </ChartWrapper>
  );
}
