import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  selectedToDo,
  toggleTodo,
} from "../redux/reducers/todosSlice";

function ToDoListItem({ todo, handleShow }) {
  const dispatch = useDispatch();
  const textContent = todo.completed ? <del>{todo.title}</del> : todo.title;

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleToggle() {
    dispatch(toggleTodo(todo.id));
  }

  function handleEdit() {
    handleShow();
    dispatch(selectedToDo(todo));
  }

  return (
    <li className="list-group-item d-flex gap-5 justify-content-between align-items-center">
      <div className="d-flex gap-2">
        <input
          className="form-check-input me-1"
          type="checkbox"
          checked={todo.completed}
          id={todo.id}
          onChange={handleToggle}
        />
        <p className="mb-0">{textContent}</p>
      </div>

      <div>
        <FontAwesomeIcon
          icon={faEdit}
          style={{
            cursor: "pointer",
            color: "skyblue",
            fontSize: "20px",
            marginLeft: "10px",
          }}
          onClick={handleEdit}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{
            cursor: "pointer",
            color: "red",
            fontSize: "20px",
            marginLeft: "10px",
          }}
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}

ToDoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ToDoListItem;
