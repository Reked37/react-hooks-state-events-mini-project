import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [taskdata, setData]= useState(TASKS)
  const [categorydata, setCategoryData]=useState(CATEGORIES)

  function deleteTask(taskObj){
    console.log('taskObj:',taskObj)
    const filteredObj=taskdata.filter(object=> object.text!==taskObj)
    console.log('filteredObject:',filteredObj)
    setData(filteredObj)
  }

  function onTaskFormSubmit(formData){
    console.log(formData)
    return setData([...taskdata, formData])
  }

  function filteredCategory(selectedButton){
    // console.log(selectedButton)
    if(selectedButton==="All"){return setData(TASKS)
    }else{
    const filtered= taskdata.filter(taskObj=>taskObj.category.includes(selectedButton))
    // console.log(filtered)
    return setData(filtered)}
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categorydata} filterCategories={filteredCategory}/>
      <NewTaskForm categories={categorydata} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList  tasks={taskdata} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
