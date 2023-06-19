import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [buttonClass, setButtonClass]=useState(true)
  
  const displayCategoriesButtons=categories.map((category)=>{
    return(<button 
      key={category}  
      onClick={selectedButton} 
      className={buttonClass}>{category}
      </button>)
  })

  function selectedButton(event){
    console.log(event.target)
    const filteredButton=categories.filter(categoryButton=>{
      return categoryButton===event.target})
    console.log(filteredButton)
    // setButtonClass((buttonClass)=> !buttonClass)
    return filteredButton.setButtonClass((buttonClass)=> !buttonClass)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoriesButtons}
    </div>
  );
}

export default CategoryFilter;
