import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateToDo } from "../redux/reducers/ToDoSlice";

function EditToDo({ show, onClose }) {
  const todo = useSelector((state) => state.todos.selectedToDo);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    completed: "",
  });

  useEffect(() => {
    if (todo) {
      setForm({
        status: todo?.completed ? "completed" : "not-completed",
        title: todo?.title,
      });
    }
  }, [todo]);

  function handleTitleChange(event) {
    setForm({
      ...form,
      title: event.target.value,
    });
  }

  function handleStatusChange(event) {
    setForm({
      ...form,
      status: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      id: todo?.id,
      title: form?.title,
      completed: form?.status === "completed" ? true : false,
    };
    dispatch(updateToDo(payload));
    onClose();
    setForm({
      status: "",
      title: "",
    });
  };

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan task"
                onChange={handleTitleChange}
                value={form?.title}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStatus">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="not-completed"
                  checked={form?.status === "not-completed"}
                  onChange={handleStatusChange}
                />
                <span className="ml-2">Active</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="completed"
                  checked={form?.status === "completed"}
                  onChange={handleStatusChange}
                />
                <span className="ml-2">Completed</span>
              </label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditToDo;
