import React from "react";
import Animation from "./Animation";
import list1 from "../mock/list1";
import list2 from "../mock/list2";
import List from "./Utilities/List";
import { ListItem } from "./Utilities/Types";

const sizeClasses = {
  height: "h-32",
  width: "w-32",
};

interface PatternProps {
  searchedPattern: string | null;
}

const Pattern: React.FC<PatternProps> = ({ searchedPattern }) => {
  const title = searchedPattern ? `Select pattern ${searchedPattern}` : "Pattern";

  const handleListItemClick = (item: ListItem) => {
    // Handle item click here
    console.log(`Item clicked: ${item.text}`);
  };


  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <div className="px-8 py-6 items-center rounded-lg bg-white shadow-lg overflow-hidden">
            <div className="container mx-auto py-6">
              <h1 className="text-gray-800 text-2xl font-bold mt-2 ml-6">{title}</h1>
              <div className="grid grid-cols-5 gap-4 h-full">
                <div className="col-span-3 flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                  <div>
                    <Animation />
                  </div>
                </div>
                <div className="col-span-1 flex bg-brand-light items-center rounded-lg  shadow-lg overflow-hidden">
                  <List title="List 1" items={list1} onItemClick={handleListItemClick}/>
                </div>
                <div className="col-span-1 flex bg-brand-light items-center rounded-lg bg-white shadow-lg overflow-hidden">
                  <List title="List 2" items={list2} onItemClick={handleListItemClick}/>
                </div>
              </div>
            </div>
        </div>
       </div>
  );
};

export default Pattern;
