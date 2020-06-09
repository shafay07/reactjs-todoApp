import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class AppHeader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="headerSection">
        <Container>
          <Row>
            <Col>
              <header>
                <h1>React To-Do</h1>
              </header>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default AppHeader;
