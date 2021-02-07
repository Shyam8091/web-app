import React, { Component } from 'react';

class Payback extends Component {
    constructor(props) {
        super(props);
        
    }
    handleClick=()=>{
        this.props.history.push({
            pathname:`/test`
        })
    }
    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>Payback Page click to route back</h1>
            </div>
        );
    }
}

export default Payback;