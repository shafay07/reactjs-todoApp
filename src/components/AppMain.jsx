import React from "react";
import ReactDOM from "react-dom";
import "./TodoItem";
import ToDo from "./TodoItem";
import { Container, Row, Col } from "reactstrap";

function AppMain() {
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

export default AppMain;
