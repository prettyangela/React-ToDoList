import { useState } from "react";
import Title from "./components/Title";
import InputToDo from "./components/InputToDo";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <Title />
          <InputToDo />
          <ToDoList />
        </div>
      </section>
    </>
  );
}

export default App;
