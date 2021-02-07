import React, { Component } from "react";
import { InputBox, Para } from "./Styled";
import { client } from "../../action/index";
class UserInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      expiration: "",
      month: "",
      year: "",
      regexp: /^[0-9\b/]+$/,
      regexp1: /^[0-9\b]+$/,
    };
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleexpiration = (event) => {
    let input = event.target.value;

    if (input === "" || this.state.regexp.test(input)) {
      if (input.length === 2 && this.state.regexp1.test(input)) {
        input = input + "/";
      }
      this.setState({
        [event.target.name]: input + this.state.year,
      });
    }
  };
  handleSubmit = () => {
    console.log("hii", this.state);
    this.props.history.push({
      pathname: `/details`,
      state: { paymentData: this.state },
    });
  };

  componentDidMount() {
    client.get('posts/1').then(response => {
console.log("response",response);
    }
    ).catch(error => { });
  }

  render() {
    console.log('I am user input props', this.props);
    return (
      <div>
        <Para>First Name</Para>
        <InputBox
          type="text"
          onChange={this.onChange}
          name="firstName"
        ></InputBox>
        <br />
        <p>Expiration</p>
        <InputBox
          type="text"
          onChange={this.handleexpiration}
          maxLength="7"
          value={this.state.expiration}
          name="expiration"
        ></InputBox>
        <br />
        <p>Last Name</p>
        <InputBox
          type="text"
          onChange={this.onChange}
          name="lastName"
        ></InputBox>
        <br />
        <p>Age</p>
        <InputBox type="text" onChange={this.onChange} name="age"></InputBox>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default UserInput;
