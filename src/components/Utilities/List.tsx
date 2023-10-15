import React from "react";
import  { ListItem } from '../Utilities/Types';

interface ListProps {
  title: string;
  items: ListItem[];
    onItemClick: (x: ListItem) => void; // Fix the type to accept a ListItem object

  }

const List: React.FC<ListProps> = ({ title, items, onItemClick }) => {
  const handleClick = (item: ListItem) => {
    // Call a function when an item is clicked (replace this with your function)
    console.log(`Item clicked: ${item.text}`);
  };

  return (
    <div className="max-w-xl mx-auto p-4 ">
      <h2 className="text-gray-700 text-2xl font-bold mb-4">{title}</h2>
      <ul>
        {items.map((item, index) => (
           <li
           key={item.id}
           className="border-t border-gray-200 py-2 cursor-pointer"
           onClick={() => onItemClick(item)}
         >
           <div className="flex items-center justify-between">
             <span className="text-gray-700">
               {index + 1}. {item.text}
             </span>
           </div>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
