import React, {Component} from "react";
import PropTypes from "prop-types";
import LoadingScreen from "./LoadingScreen";
import {withStyles} from "@material-ui/core";
import Engine from "../HaschmatEngine/engine";

const styles = ({
    root: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

class Screen extends Component {
    state = {isLoading: false};
    canvasRef = React.createRef();

    componentDidMount() {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext("2d");

        const engine = new Engine(this.props.width, this.props.height, this.props.scale, context);
        engine.start();
    }

    render() {
        const {classes, height, width, scale} = this.props;
        const {isLoading} = this.state;

        return (
            <div className={classes.root}>
                {isLoading && <LoadingScreen/>}
                <canvas ref={this.canvasRef} width={width * scale} height={height * scale}/>
            </div>
        );
    }
}

Screen.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    scale: PropTypes.number.isRequired
};

export default withStyles(styles)(Screen);