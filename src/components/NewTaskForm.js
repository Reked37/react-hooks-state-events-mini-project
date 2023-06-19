import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails]=useState("")
  const [categoryData, setCategoryData]=useState("Code")

  const mapCategories=categories.filter(category=>category!=="All")
  .map(category=><option key={category}>{category}</option>)
    
  function handleDetails(event){
    // event.preventDeafult()
    setDetails(event.target.value)
  }

  function handleCategories(event){
    setCategoryData(event.target.value)
  }

  function handleSubmit(event){
   event.preventDefault()
   const formData={
    text:details,
    category:categoryData,
   }
   console.log(formData)
   onTaskFormSubmit(formData)
   setDetails("")
   setCategoryData("")
    
  }

  //console.log(details)
  // console.log(categoryData)

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails} value={details} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategories}>
          {mapCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
