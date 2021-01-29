import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2574fb",
      light: "#d0e1ff",
      dark: "#303f9f",
    },
    secondary: {
      main: "#6e19ce",
    },
    green: {
      main: "#26c738",
      dark: "#079417",
    },
    text: {
      secondary: "#898b8f",
    },
  },
  typography: {
    fontFamily: ["Comfortaa"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
