import React, { useRef, useContext } from "react";
import Store from "../context";
import './style.css'
export default function TodoList({ txt }) {
  const { state, dispatch } = useContext(Store);;
  
  const inpRef = useRef()
  const done = () => {
    inpRef.current.classList.add('realsie')
  }
  return (
    <div className="border" id="ima" >
      <form >
        <ul>{state.todos.map(t => (<li key={t} ref={inpRef} readOnly value={txt} className="ispa">{t}
          <button style={{ marginLeft: 120 }} onClick={() => dispatch({ type: "COMPLETE", payload: t })} className="suppe" > Supprimer</button>
          <input type="button" value='Done' onClick={done} className="done" />
        </li>
        ))}
        </ul>
      </form>
      <div className='rr'>
      </div>
    </div>
  );
}