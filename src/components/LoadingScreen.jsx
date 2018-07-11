import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {Typography} from "@material-ui/core";

const styles = ({
    root: {
        position: "absolute",
        zIndex: 1,
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: 200
    },
    dots: {
        fontWeight: 200,
        /* some strange hack to keep the text from moving */
        width: 0
    }
});

class LoadingScreen extends Component {
    state = {
        loadingText: [".", "..", "...", ""],
        loadingTextIndex: 0,
        timerId: null
    };

    componentWillMount() {
        const timerId = setInterval(this.cycleLoadingText, 300);
        this.setState({timerId});
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    cycleLoadingText = () => {
        const {loadingTextIndex} = this.state;
        let newLoadingTextIndex = loadingTextIndex;

        if (loadingTextIndex === 3) {
            newLoadingTextIndex = 0;
        } else {
            newLoadingTextIndex++;
        }

        this.setState({
            loadingTextIndex: newLoadingTextIndex
        })
    };

    render() {
        const {classes} = this.props;
        const {loadingText, loadingTextIndex} = this.state;

        return (
            <div className={classes.root}>
                <Typography variant="display3" color="primary" className={classes.text}>
                    Loading
                </Typography>
                <Typography variant="display3" color="primary" className={classes.dots}>
                    {loadingText[loadingTextIndex]}
                </Typography>
            </div>
        );
    }
}

LoadingScreen.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadingScreen);