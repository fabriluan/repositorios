import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./components/Theme";
import { AuthContext } from "./Contexts/theme";
import GlobalStyles from "./globalStyles";
import RoutesComp from "./Routes";
import { darkTheme, ligthTheme } from "./styles/theme";

function App() {

  const { theme } = useContext(AuthContext);

  return (
        <ThemeProvider theme={ theme ? ligthTheme : darkTheme}>

          <GlobalStyles/>

          <BrowserRouter>

            <RoutesComp/>

          </BrowserRouter>

          <Theme/>
          
        </ThemeProvider>
  );
}

export default App;
