import React from "react";
import { Paper, Typography } from "@material-ui/core";
// import format from "date-fns/format";
// import { parseISO } from "date-fns";
import { formatNumber, formatXAxis } from "../utils";

const CustomTooltip = (props) => {
  const { isDateOnXaxis, isTimeOnXaxis } = props;

  return (
    <Paper style={{ padding: 10 }}>
      <Typography variant="subtitle2">
        {formatXAxis(props.label, isDateOnXaxis, isTimeOnXaxis)}
      </Typography>
      {props.payload &&
        props.payload.map((payload, index) => {
          return (
            <Typography
              key={index}
              variant="body2"
              align="left"
              style={{
                color: payload.color,
                padding: "3px 0px",
              }}
            >
              {`${payload.name}: ${formatNumber(payload.value)}${payload.unit}`}
            </Typography>
          );
        })}
    </Paper>
  );
};

export default CustomTooltip;
