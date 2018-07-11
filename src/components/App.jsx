import React, {Component} from "react";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Screen from "./Screen";
import {theme} from "./../theme";

const styles = ({
    root: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

class App extends Component {
    handleKeyPress = event => {
        switch (event.key) {
            case "ArrowUp":
                break;
            case "ArrowDown":
                break;
            case "ArrowLeft":
                break;
            case "ArrowRight":
                break;
            default:
                // Some other key pressed
                return;
        }

        // TODO remove
        console.log(event.key);

        event.preventDefault();
    };

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    render() {
        const {classes} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <div className={classes.root}>
                    <Screen width={384} height={320} scale={2}/>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);