import { useState } from "react";
import Title from "./components/Title";
import InputToDo from "./components/InputToDo";
import ToDoList from "./components/ToDoList";
import ButtonFilter from "./components/ButtonFilter";

function App() {
  return (
    <>
      <section>
        <div className="container">
          <Title />
          <InputToDo />
          <ButtonFilter />
          <ToDoList />
        </div>
      </section>
    </>
  );
}

export default App;
