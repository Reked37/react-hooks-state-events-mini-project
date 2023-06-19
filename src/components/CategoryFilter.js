import React, {useState} from "react";

function CategoryFilter({categories, filterCategories}) {
  const [buttonClass, setButtonClass]=useState(false)
  
  const displayCategoriesButtons=categories.map((category)=>{
    return(<button 
      key={category}  
      onClick={selectedButton} 
      className={buttonClass?"selected":""}>{category}
      </button>)
  })

  function selectedButton(event){
    const pressedButton=event.target.textContent
    const filteredButton=categories.filter(categoryButton=>categoryButton===pressedButton)
    console.log('Filter:',filteredButton[0])
    // setButtonClass((buttonClass)=> !buttonClass)
    filterCategories(pressedButton)
    return setButtonClass((buttonClass)=> !buttonClass)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoriesButtons}
    </div>
  );
}

export default CategoryFilter;
