import React from 'react';
import Navigation from "./components/navigation/navigation";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from './theme/theme'

function App(props) {
  return (
      <React.Fragment>
          <MuiThemeProvider theme={theme}>
              <Navigation/>
          </MuiThemeProvider>
      </React.Fragment>
  );
}

export default App;
