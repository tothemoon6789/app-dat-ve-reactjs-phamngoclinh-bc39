import React, { Component } from 'react';

const startColStyle = {
    width: "50px",
    height: "50px",
    margin: "1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight:"bold",
   
}
class StartCol extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const {detail} = this.props;
        return (
            <div style={startColStyle}>
                {detail}
            </div>
        );
    }
}

export default StartCol;