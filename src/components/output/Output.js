import React, { Component } from 'react';
import {CardWrapper} from './Styled';
class Output extends Component {
    constructor(props) {
        super(props);
        this.state={
            
        }
    }
    handleClick=()=>{
        this.props.history.push({
            pathname:`/payback`
        })
    }
    componentWillUnmount(){
        console.log("Props",this.props);
    }
    render() {
        return (
            <CardWrapper >
                <h1 onClick={this.handleClick}>User Information</h1>
                <p>{this.props.location.state.paymentData.firstName}</p><br/>
                <p>{this.props.location.state.paymentData.expiration}</p><br/>
                <p>{this.props.location.state.paymentData.lastName}</p>
            </CardWrapper>
        );
    }
}

export default Output;