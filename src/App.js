import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";

import NavBar from "./present/NavBar";
import DeviceTab from "./present/DeviceTab";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[600],
            light: "#6ab7ff",
            dark: "#005cb2"
        },
        secondary: {
            main: "#00c853",
            light: "#5efc82",
            dark: "#009624"
        }
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                <DeviceTab />
            </MuiThemeProvider>
        );
    }
}

export default App;
