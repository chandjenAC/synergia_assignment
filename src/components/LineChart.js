import React from "react";
import { LineChart, Line } from "recharts";
import { XAxis, YAxis, Tooltip } from "recharts";
import { Legend, ResponsiveContainer, CartesianGrid } from "recharts";
import { customTickFormatter, formatXAxis } from "../utils";
import { rechartColors } from "../utils/constants";
import CustomTooltip from "./CustomTooltip";

const LineChartMolecule = (props) => {
  const { data, width, height, isDateOnXaxis, isTimeOnXaxis } = props;

  let colors = rechartColors;

  return (
    data?.data && (
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          data={data.data}
          margin={{ top: 5, right: 30, left: 5, bottom: 5 }}
        >
          <XAxis
            dataKey="name"
            tick={{ fill: "#949494" }}
            stroke="#5c5c5c"
            strokeWidth={0.5}
            tickLine={false}
            axisLine={true}
            tickFormatter={(tickItem) =>
              formatXAxis(tickItem, isDateOnXaxis, isTimeOnXaxis)
            }
            // interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: "#949494" }}
            stroke="#5c5c5c"
            strokeWidth={0.5}
            tickLine={false}
          />
          <CartesianGrid strokeWidth={0.5} />
          <Tooltip
            content={
              <CustomTooltip
                isDateOnXaxis={isDateOnXaxis}
                isTimeOnXaxis={isTimeOnXaxis}
                {...props}
              />
            }
          />
          <Legend wrapperStyle={{ color: "#c2c9d9" }} />
          {data.lines.map((line, index) => {
            return (
              <Line
                key={index}
                // type="monotone"
                name={line.name}
                dataKey={line.key}
                unit={line.unit}
                stroke={colors[index]}
                strokeDasharray={line.dashedLine ? "5 5" : null}
                dot={{
                  fill: colors[index],
                }}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    )
  );
};

export default React.memo(LineChartMolecule);
