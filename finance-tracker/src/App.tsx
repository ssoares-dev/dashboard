import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";

import {useTheme} from "./hooks/theme";

import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
