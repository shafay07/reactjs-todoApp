import React, { Component } from "react";

class AppHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="headerSection">
        <header>
          <h1>React TO-DO</h1>
        </header>
      </section>
    );
  }
}
export default AppHeader;
