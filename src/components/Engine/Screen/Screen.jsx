import React, {Component} from "react";
import {createTileMap} from "../logic";
import PropTypes from "prop-types";

class Screen extends Component {
    render() {
        const tileMap = createTileMap(this.props.x, this.props.y, this.props.tileSize);
        return (
            <div style={{
                backgroundColor: "#000000",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                border: "3px solid red",
                borderRadius: 3
            }}>
                {tileMap.map((row, y) =>
                    <div
                        key={y}
                        style={{
                            height: row[0].tileSize,
                            display: "flex",
                            flex: 1,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}>
                        {row.map((tile, x) =>
                            <div key={x} style={{
                                width: tile.tileSize,
                                height: tile.tileSize,
                                backgroundColor: tile.color,
                                outlineOffset: "-2px",
                                outline: "1px green solid"
                            }}/>
                        )}
                    </div>
                )}
                {this.props.children}
            </div>
        );
    }
}

Screen.propTypes = {
    children: PropTypes.node,
    x: PropTypes.number,
    y: PropTypes.number,
    tileSize: PropTypes.number,
};

export default Screen;