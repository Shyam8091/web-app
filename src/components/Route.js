import React, { Component } from "react";
import { Switch, Route, HashRouter as Router,useHistory } from "react-router-dom";
import UserInput from "./userDetails/UserInput";
import Output from "./output/Output";
import Payback from "./payBack/Payback";
import Test from "./test/Test";
class PageContent extends Component {
  render() {
    console.log("I am pagecontent");
    return (
      <div>
        <Router >
          <Switch >
          <Route exact path="/"  name="UserInput" component={UserInput} />
          <Route path="/details" name="Output" component={Output} />
          <Route path="/payback" name="Payback" component={Payback} />
          <Route path="/test" name="Test" component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default PageContent;
