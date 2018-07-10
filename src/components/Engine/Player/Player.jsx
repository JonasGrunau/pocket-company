import React, {Component} from "react";

class Player extends Component {
    render() {
        return (
            <div style={{
                borderRadius: 90,
                position: "absolute",
                height: 13,
                width: 13,
                marginTop: this.props.y,
                marginLeft: this.props.x,
                backgroundColor: "#FFFFFF"
            }}/>
        );
    }
}

export default Player;