import React, { useContext, useState } from "react";
import Store from "../context";

export default function TodoForm() {
  const { dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleTodoAdd() {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleTodoAdd();
  }

  return (
   <div id="div1"  className="sasa">
        <br />
          <input
            
            value={todo}  autoFocus={true}  placeholder="Enter nouvelle todo" onKeyUp={handleSubmitForm}  onChange={handleTodoChange}
          />
          
            <button onClick={handleTodoAdd} id="button1">Ajouter </button>
           
      
    </div>
  );
}
