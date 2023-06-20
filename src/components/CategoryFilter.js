import React, {useState} from "react";

function CategoryFilter({categories, selectedButton, setSelectedButton}) {
  
  
  const displayCategoriesButtons=categories.map((category)=>{
    const colorButton= selectedButton=== category?"selected":""
    return(<button 
      key={category}  
      // onClick={selectedButton} 
      onClick={()=>setSelectedButton(category)}
      className={colorButton} 
      value={selectedButton}>
        {category}
      </button>)
  })

  // function selectedButton(event){
  //   const pressedButton=event.target.textContent
  //   const elementButton=event.target
  //   console.log(elementButton)
  //   return filterCategories(pressedButton)
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoriesButtons}
    </div>
  );
}

export default CategoryFilter;
