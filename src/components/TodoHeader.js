import React from "react";

export const TodoHeader = (props) => (
  <div id="div1" >
    <div >
      <h5>Todo List</h5>
    </div>
    <div >
      {props.children}
    </div>
  </div>
);
