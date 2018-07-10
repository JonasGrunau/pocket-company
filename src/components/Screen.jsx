import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {createTileMap} from "../logic/util";

const options = {
    resolution: {
        x: 640,
        y: 400,
    },
    tileSize: 10,
};

const styles = ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    screen: {
        width: options.resolution.x,
        height: options.resolution.y,
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    tileRow: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row"
    }
});

const tileMap = createTileMap(options);

class Screen extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>

                <div className={classes.screen}>
                    {tileMap.map((row, y) =>
                        <div key={y} className={classes.tileRow} style={{height: row[0].tileSize, flex: 1}}>
                            {row.map((tile, x) =>
                                <div key={x} style={{
                                    width: tile.tileSize,
                                    height: tile.tileSize,
                                    backgroundColor: tile.color
                                }}/>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Screen.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Screen);