import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { deathCount } from "../utils/tartantinoData";
import ChartWrapper from "./ChartWrapper";

export default function Bar() {
  const data = deathCount;

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
        getValue: datum => datum.secondary
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
