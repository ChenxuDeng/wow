import React from 'react';
import Navigation from "./components/navigation/navigation";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from './theme/theme'
import MainPage from "./components/mainPage/mainPage";

function App(props) {
  return (
      <React.Fragment>
          <MuiThemeProvider theme={theme}>
              <Navigation/>
              <MainPage/>
          </MuiThemeProvider>
      </React.Fragment>
  );
}

export default App;
