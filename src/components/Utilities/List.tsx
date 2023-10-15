import React from "react";
import { ListItem } from '../Utilities/Types';

interface ListProps {
  title: string;
  items: ListItem[];
  onItemClick: (x: ListItem) => void;
}

const List: React.FC<ListProps> = ({ title, items, onItemClick }) => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-gray-700 text-2xl font-bold mb-4">{title}</h2>
      <div className="max-h-40 overflow-y-auto">
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
    </div>
  );
};

export default List;
