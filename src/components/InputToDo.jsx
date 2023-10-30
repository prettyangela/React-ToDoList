import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/ToDoSlice";

function InputToDo() {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    function handleSubmit() {
        dispatch(addTodo(title))
        setTitle('')
    }

  return (
    <div className="row ">
      <div className="col-lg-12 col-md-12 col-12 row text-center">
        <div className="input-group mb-3">
          <input
            value={title}
            type="text"
            className="form-control"
            placeholder="What to do"
            aria-label="What to do"
            aria-describedby="button-addon2"
            name="lala"
            onChange={e => setTitle(e.target.value)}
          />
          <button 
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={title === ''}
            >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputToDo;
