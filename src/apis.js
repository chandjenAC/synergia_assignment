export const urls = {
  getCities: "https://api.openaq.org/v1/cities?country=IN&limit=260",
};

export const getMeasurementsUrl = ({ city, dateFrom, dateTo }) => {
  return `https://api.openaq.org/v1/measurements?country=IN&city=${city}&date_from=${dateFrom}&date_to=${dateTo}&limit=150`;
};
