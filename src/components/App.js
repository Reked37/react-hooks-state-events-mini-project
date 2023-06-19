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


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categorydata} />
      <NewTaskForm />
      <TaskList  tasks={taskdata} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
