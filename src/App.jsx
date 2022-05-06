import React, {useState} from "react";
import { GlobalStyle } from "./style/GlobalStyle";
import Main from "./components/Main"
import { darkTheme,lightTheme } from "./style/theme/theme"
import { ThemeProvider } from "styled-components";

const themes = {
  light: lightTheme, 
  dark: darkTheme,
}


function App() {

  const [theme, setTheme] = useState("dark")

  return (
    <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Main theme={theme}  setTheme={setTheme}/>
    </ThemeProvider>
  );
}

export default App;
