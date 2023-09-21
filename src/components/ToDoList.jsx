/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const ToDoList = (props) => {

  return (
    <div className="col">
      <div className="card  rounded">
        <div className="card-body bg-light">{props.item}</div>

        <div className=" card-footer btn btn-group bg-dark-subtle">
          {/* delete */}
        <button className="btn btn-danger"  onClick={() => {
              props.deleteItem(props.index);
            }}>
          <i
            className="fa-solid fa-trash"
          ></i>
        </button>
        {/* delete */}

        {/* edit */}

        <button
          type="button"
          className="btn btn-primary edit"
          onClick={()=>props.editListToDo(props.index)}
        >
          <i
            className="fa-solid fa-pen-to-square"
          ></i>
        </button>
        {/* edit */}
        </div>

       

      </div>
    </div>
  );
};

export default ToDoList;
