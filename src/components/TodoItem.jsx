import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function additem() {
  alert("Add item to list");
}

class TodoItem extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="todoItem shadow">
        <ListGroup>
          <ListGroupItem color="success" onClick={additem} action>
            <FontAwesomeIcon icon={faPlusCircle} /> <h3>Add a new item</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="danger" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="danger" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="danger" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="info" action>
            <h3>item 1</h3>
          </ListGroupItem>
          <ListGroupItem color="danger" action>
            <h3>item 1</h3>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
export default TodoItem;
