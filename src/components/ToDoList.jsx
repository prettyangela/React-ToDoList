import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoListItem from "./ToDoListItem";
import EditToDo from "./EditToDo";

function ToDoList() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const todos = useSelector((state) => {
    switch (state.todos.filter) {
      case "completed":
        return state.todos.todos.filter((todo) => todo.completed);
      case "active":
        return state.todos.todos.filter((todo) => !todo.completed);
      default:
        return state.todos.todos;
    }
  });

  return (
    <>
      <ul className="list-group mt-5">
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
