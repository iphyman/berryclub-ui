import { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

export default class Routes extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/">
            Hello World!
          </Route>
        </Switch>
      </>
    );
  }
}
