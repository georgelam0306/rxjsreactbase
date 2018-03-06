import React, { Component } from "react";
import { render } from "react-dom";
import PingComponent from "./components/PingComponent";
import "./styles/main.css";
import { Observable, map } from "rxjs";
import Store from "./store/store";
import { Provider } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React1"
    };
  }

  render() {
    const test = [1, 2, 3, 4];
    Observable.from(test)
      .map(t => {
        return t * 2;
      })
      .subscribe(result => {
        console.log(result);
      });
    return (
      <Provider store={Store.store}>
        <div>
          <PingComponent />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
