import "./App.css";
import React from "react";
import {
     HashRouter as Router,
     Route,
     Switch,
   } from "react-router-dom";
import Insertion from "./Insertion";
import Home from "./Home";
import Detection from "./Detection";
import Prevention from "./Prevention";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
var favicon = document.getElementById("favicon");
favicon.href = "%PUBLIC_URL%/favicon.ico";
document.title = "IIITA - Pretexting Project";

const theme = createMuiTheme({
     typography: {
          fontFamily: [
               "Montserrat",
               "Roboto",
               '"Helvetica Neue"',
               "Arial",
               "sans-serif",
          ].join(","),
     },
});

function App() {
     return (
          <ThemeProvider theme={theme}>
               <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                         <Route exact path="/" component={Home} />
                         <Route
                              exact
                              path="/insertion/:emailA/:emailV"
                              component={Insertion}
                         />
                         <Route path="/detection" component={Detection} />
                         <Route path="/prevention" component={Prevention} />
                         <Route path="/*" component={Home} />
                    </Switch>
               </Router>
          </ThemeProvider>
     );
}

export default App;
