import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoListItem from "./ToDoListItem";
import EditToDo from "./EditToDo";

function ToDoList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => {
          return (
            <ToDoListItem key={todo.id} todo={todo} handleShow={handleShow} />
          );
        })}
      </ul>

      <EditToDo show={show} onClose={handleClose} />
    </>
  );
}

export default ToDoList;
