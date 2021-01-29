import ParentContainer from "./containers/ParentContainer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> <ParentContainer />
    </ThemeProvider>
  );
};

export default App;
