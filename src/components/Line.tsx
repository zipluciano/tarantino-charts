import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { moviesRank } from "../utils/tartantinoData";
import ChartWrapper from "./ChartWrapper";

export default function Line() {
  const data = moviesRank;

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
        elementType: "line"
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
