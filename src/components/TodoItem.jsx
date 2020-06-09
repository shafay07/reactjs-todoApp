import React, { Component } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem
} from "reactstrap";

class TodoItem extends Component {
  itemCount = 0;
  constructor() {
    super();
    const itemCounter = (
      <ListGroupItem className="mt-2 mb-2 itemCounterListItem" color="warning" action><h4>All caught up!</h4></ListGroupItem>
    );
    //initialize state
    this.state = {
      todoList: itemCounter,
      id: 1
    };
    this.addItemHandler = this.addItemHandler.bind(this);
    this.strikeItem = this.strikeItem.bind(this);
  }

  //onClick handler for adding an item
  addItemHandler(e) {
    e.preventDefault();
    const value = document.getElementById("inputTask").value;

    //update state
    this.setState(prevState => {
      if (prevState && value) {
        console.log(prevState);
        this.itemCount++;
        const newtodoItems = (
          <div>
            <ListGroupItem
              className="mt-2"
              color="success"
              id={(prevState.id += 1)}
              onClick={this.strikeItem}
              action
            >
              <h3>{value}</h3>
            </ListGroupItem>
            {prevState.todoList}
            {prevState.itemCount}
          </div>
        );

        return { todoList: newtodoItems };
      }
    });
    document.getElementById("inputTask").value = ""; //reset input box
  }
  //strike a list item
  strikeItem(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="todoItem shadow">
        <Form inline onSubmit={this.addItemHandler}>
          <Row className="m-2">
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="task"
                  id="inputTask"
                  placeholder="Add a new task"
                  size="lg"
                  maxLength="100"
                />
                <Button className="m-2" color="primary">
                  Add
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row className="m-2">
          <Col>
            <ListGroup>{this.state.todoList}</ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}
export default TodoItem;
