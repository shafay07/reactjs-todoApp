import React from "react";
import ReactDOM from "react-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function additem() {
  alert("Add item to list");
}
function TodoItem() {
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

export default TodoItem;
