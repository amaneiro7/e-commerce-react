import React, { useContext } from "react";
import { TodoContext } from "../../hooks";

export function CategoryList(props) {    
  const {categorySelected, onChangeCategory} = useContext(TodoContext);
  const {category} = props;  
  
  
  return (
    <>
      <li>
        <button className={`btn--menu btn--category ${categorySelected === category && 'active'}`}        
        onClick={onChangeCategory}
        >
          <i className="bi bi-hand-index-thumb" />
          {category}
        </button>
      </li>
    </>
  );
}
