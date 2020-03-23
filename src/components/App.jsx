import React, { Component } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppMain from "./AppMain";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </div>
    );
  }
}

export default App;
