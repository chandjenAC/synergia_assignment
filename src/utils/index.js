import format from "date-fns/format";
import { parseISO } from "date-fns";

export const formatNumber = (number) => {
  let locale = "en-US";
  number = Number(number);
  let formattedNumber = new Intl.NumberFormat(locale).format(number);
  return formattedNumber;
};

export const formatXAxis = (tickItem, isDateOnXaxis, isTimeOnXaxis) => {
  if (tickItem) {
    if (isDateOnXaxis) {
      return format(new Date(parseISO(tickItem)), "MM/dd/yyyy");
    } else if (isTimeOnXaxis) {
      const date = new Date(tickItem);
      const isoDate = date.toISOString();
      return `${isoDate.substr(11, 8)}`;
    }
    return tickItem;
  }
  return "";
};
