import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/reducers/todosSlice";

function ButtonFilter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.todos.filter);

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div className="d-flex gap-3">
      <button
        className={`btn btn-${filter === "all" ? "primary" : "secondary"}`}
        onClick={() => handleFilterClick("all")}
      >
        ALL
      </button>
      <button
        className={`btn btn-${filter === "active" ? "primary" : "secondary"}`}
        onClick={() => handleFilterClick("active")}
      >
        ACTIVE
      </button>
      <button
        className={`btn btn-${
          filter === "completed" ? "primary" : "secondary"
        }`}
        onClick={() => handleFilterClick("completed")}
      >
        COMPLETED
      </button>
    </div>
  );
}

export default ButtonFilter;
