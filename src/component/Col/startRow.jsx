import React, { Component } from 'react';

const startRowStyle = {
    width: "50px",
    height: "50px",
    margin: "1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight:"bold",
}
class StartRow extends Component {
    render() {
        const {seatNumber}=this.props
        return (
            <div style={startRowStyle}>
                {seatNumber}
            </div>
        );
    }
}

export default StartRow;