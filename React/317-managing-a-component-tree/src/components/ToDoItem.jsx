import React, { useState } from "react";



function ToDoItem(props) {
    const [isSelected, setIsSelected] = useState(false);

    function handleClick() {
       setIsSelected((prevValue) => !prevValue);
    }

 return <li style={{textDecoration: isSelected ? "line-through" : "none"}} onClick={handleClick} >{props.item}</li>
}

export default ToDoItem;