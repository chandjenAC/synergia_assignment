import React, { useState, useEffect } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { Typography, TextField } from "@material-ui/core";
import { get } from "../utils/callApi";
import { getMeasurementsUrl, urls } from "../apis";
import Loader from "../components/Loader";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import LineChart from "../components/LineChart";
import { Autocomplete } from "formik-material-ui-lab";
import { Formik, Form, Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import mapValues from "lodash/mapValues";
import groupBy from "lodash/groupBy";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#f5f5f5",
    height: "100vh",
    padding: "0px 60px",
  },
  titleCont: {
    marginBottom: "1.5rem",
  },
  selectCont: {
    margin: "1.5rem",
  },
  chartCont: {
    display: "grid",
    placeItems: "center",
    marginTop: "2.5rem",
    width: "100%",
    height: 500,
  },
  centerDiv: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  fieldCont: {
    padding: "0px 16px",
  },
  submitButtonCont: {
    padding: "12px 16px 0px 16px",
  },
}));

const ParentContainer = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [loaderText, setLoaderText] = useState("Loading Cities...");
  const [cities, setCities] = useState([]);
  const [graphData, setGraphData] = useState({
    data: [],
    lines: [
      { key: "no2", name: "NO2", unit: "µg/m³" },
      { key: "pm25", name: "PM25", unit: "µg/m³" },
      { key: "o3", name: "O3", unit: "µg/m³" },
      { key: "co", name: "CO", unit: "µg/m³" },
      { key: "pm10", name: "PM10", unit: "µg/m³" },
      { key: "so2", name: "SO2", unit: "µg/m³" },
    ],
  });

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    let options = [];
    setLoading(true);
    let res = await get(urls.getCities);
    if (res?.results?.length > 0) {
      res.results.forEach((item) => {
        options.push({ label: item.name, value: item.name });
      });
    }
    setCities(options);
    setLoading(false);
  };

  const getGraphData = async (values, setSubmitting) => {
    let city = values.city.label;
    let dateFrom = format(new Date(values.date), "yyyy-MM-dd");
    let dateTo = format(addDays(new Date(values.date), 1), "yyyy-MM-dd");
    setLoading(true);
    setLoaderText("Loading pollution data...");
    let url = getMeasurementsUrl({
      city: city,
      dateFrom: dateFrom,
      dateTo: dateTo,
    });
    let res = await get(url);
    if (res?.results?.length > 0) {
      let chartData = [];
      let groupedByDate = mapValues(groupBy(res.results, "date.utc"));
      Object.keys(groupedByDate).forEach((key) => {
        let graphPointData = {};
        graphPointData.name = key;
        groupedByDate[key].forEach((item) => {
          graphPointData[item.parameter] = item.value;
        });
        chartData.push(graphPointData);
      });
      chartData.reverse();
      setGraphData({ ...graphData, data: chartData });
    }
    setLoading(false);
    setSubmitting(false);
  };

  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      {loading && (
        <div className={classes.centerDiv}>
          <Loader loaderText={loaderText} />
        </div>
      )}
      <Grid item className={classes.titleCont}>
        <Typography variant="h5" align="center">
          Pollution count by City
        </Typography>
      </Grid>
      <Grid item className={classes.selectCont}>
        <Formik
          initialValues={{
            date: new Date(),
            city: null,
          }}
          validate={(values) => {
            const errors = {};
            if (!values.city) {
              errors.city = "Required!";
            }
            if (!values.date) {
              errors.date = "Required!";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              getGraphData(values, setSubmitting);
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting, touched, errors }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Form>
                <Grid container alignItems="flex-start">
                  <Grid item className={classes.fieldCont}>
                    <Field
                      name="city"
                      component={Autocomplete}
                      options={cities}
                      getOptionLabel={(option) => option.label}
                      style={{ width: 230 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          margin="dense"
                          error={touched["city"] && !!errors["city"]}
                          helperText={touched["city"] && errors["city"]}
                          label="Select City"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item className={classes.fieldCont}>
                    <Field
                      component={DatePicker}
                      autoOk
                      format="dd/MM/yyyy"
                      variant="outlined"
                      margin="dense"
                      name="date"
                      label="Select Date"
                    />
                  </Grid>
                  <Grid item className={classes.submitButtonCont}>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </MuiPickersUtilsProvider>
          )}
        </Formik>
      </Grid>
      <Grid item className={classes.chartCont}>
        {graphData.data.length > 0 && (
          <LineChart
            width={"80%"}
            height={500}
            data={graphData}
            isTimeOnXaxis={true}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ParentContainer;
