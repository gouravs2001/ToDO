/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";

const ToDoInput = ({ addList }) => {
    
  const [input, setInput] = useState("");

  const handleClick = () => {
    addList(input);
    setInput("");
  };

  const handleEnter = (e)=>{
    if(e.keyCode === 13){
        handleClick();
    }
  }
  return (
    <div>
        <input
          type="text"
          className="inputBox m-2"
          value = {input}
          placeholder="Enter your task"
          autoFocus
          onKeyDown={handleEnter}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-md btn-light m-0 addbtn"  onClick={handleClick}>
          ➕
        </button>
    
    </div>
  );
};

export default ToDoInput;
