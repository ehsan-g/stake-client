import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Router from "./routes/Router";
import MyTheme from "./assets/global/MyTheme";

function App() {
  const routing = useRoutes(Router);
  const theme = MyTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
