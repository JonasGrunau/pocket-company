import React, {Component} from "react";
import {CssBaseline} from "@material-ui/core";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Screen from "./Engine/Screen/Screen";
import Player from "./Engine/Player/Player";

const styles = ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
});

class App extends Component {
    state = {
        playerX: 0,
        playerY: 0
    };

    handleKeyPress = event => {
        event.preventDefault();

        console.log(event.key);

        const step = 1;
        const {playerX, playerY} = this.state;
        let newPosition = null;

        switch (event.key) {
            case "ArrowUp":
                newPosition = {
                    x: playerX,
                    y: playerY - step
                };
                break;
            case "ArrowDown":
                newPosition = {
                    x: playerX,
                    y: playerY + step
                };
                break;
            case "ArrowLeft":
                newPosition = {
                    x: playerX - step,
                    y: playerY
                };
                break;
            case "ArrowRight":
                newPosition = {
                    x: playerX + step,
                    y: playerY
                };
                break;
            default:
                // Some other key pressed
                break;
        }
        if (newPosition) {
            this.setState({
                playerY: newPosition.y,
                playerX: newPosition.x
            });
        }
    };

    componentWillMount() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <Screen x={1280} y={720} tileSize={16}>
                    <Player x={this.state.playerX} y={this.state.playerY}/>
                </Screen>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);