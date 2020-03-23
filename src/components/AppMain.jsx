import React, { Component } from "react";
import "./TodoItem";
import ToDo from "./TodoItem";
import { Container, Row, Col } from "reactstrap";

class AppMain extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="mainSection ">
        <Container>
          <Row>
            <Col>
              <ToDo />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default AppMain;
