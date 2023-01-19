import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { cursedWords } from "../utils/tartantinoData";
import ChartWrapper from "./ChartWrapper";

export default function BarStackedVertical() {
  const data = cursedWords;

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: datum => datum.primary
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: datum => datum.secondary,
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
