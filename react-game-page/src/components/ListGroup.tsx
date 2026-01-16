import { useState } from "react";
//{items:[], heading: string }
interface Props{
    items:string[];
    heading:string; //we are using type annotation to define the props

    //(item: STRING)=>void
    onSelectItem(item:string):void;
}

function ListGroup({items, heading, onSelectItem}:Props) {
  
 
   const [selectedIndex, setSelectedIndex]= useState(-1);// state variable called selectedIndex

  return (
    <>
      <h1>{heading}</h1>
      {items.length ===0 &&<p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li  className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
           key={item}
            onClick={() => {setSelectedIndex(index),
                onSelectItem
            }}
            
          
          >{item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
