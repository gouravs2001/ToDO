// eslint-disable-next-line no-unused-vars
import React from 'react'
import ToDoInput from './components/ToDoInput'
import { useState } from 'react'
import ToDoList from './components/ToDoList';

const App = () => {
 
  const[listTodo,setListTodo] = useState([]);
 
  const addList = (inputText)=>{
    if(inputText != "")
  setListTodo([...listTodo,inputText])
 }
 
 const deleteListItem = (key)=>{
  const newListTodo = [...listTodo];
  newListTodo.splice(key,1);
  setListTodo([...newListTodo])
 }

 const editListItem = (key)=>{
   const newListToDo = [...listTodo];
   let newItem = prompt("Edit",newListToDo[key]);
  newListToDo[key] = newItem;
  if(newListToDo[key])
  setListTodo([...newListToDo])

 }

  return (
    <div>
      <div className="header p-5">
      <h1 className="heading display-1"><strong>TODO</strong></h1>
      <ToDoInput addList = {addList}/>
      </div>
      <div className="row row-cols-1 row-cols-md-5 g-4">
      {
        listTodo.map((item,idx)=>{
          return <ToDoList key ={idx} index = {idx} item = {item} deleteItem = {deleteListItem} editListToDo = {editListItem} />
        })
        
      }

</div>
      </div>
  )
}

export default App