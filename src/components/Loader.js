import React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progress: {
    zIndex: 99,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  cont: {
    width: 200,
  },
}));

const Loader = (props) => {
  const { loaderText } = props;
  const classes = useStyles();
  return (
    <div className={classes.progress}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.cont}
      >
        <Grid item>
          <CircularProgress size={28} />
        </Grid>
        <Grid item>
          <Typography variant="caption">{loaderText}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Loader;
