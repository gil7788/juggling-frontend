import React, { useState } from "react";
import GeneratorForm from "./GeneratorForm";
import list2 from "../mock/list2";
import List from "./Utilities/List";
import { ListItem } from "./Utilities/Types";


interface GenerateProps {
  patternLength: string;
  numberOfBalls: string;
}
export default function Generate(props: GenerateProps) {
  const { patternLength, numberOfBalls } = props;
  const [patternLengthValue, setPatternLengthValue] = useState("");
  const [numberOfBallsValue, setNumberOfBallsValue] = useState("");
  const [patternNames, setPatternNames] = useState<ListItem[]>([]);

  const handleGenerate = () => {
    const apiUrl = `http://localhost:5000/generate?patternLength=${patternLengthValue}&numberOfBalls=${numberOfBallsValue}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const names = data.map((item: any, index: number) => ({ id: index, text: JSON.parse(item)._pattern.join('') }));
        setPatternNames(names);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleListItemClick = (item: ListItem) => {
    console.log(`Item clicked: ${item.text}`);
  };

  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <div className="form-group px-8 py-6 items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <div className="container mx-auto py-6">

          <h1 className="text-2xl font-bold text-gray-800 mt-2 ml-6">Generate</h1>

          <div className="grid grid-cols-5 gap-4 h-full">
            <div className="col-span-3 flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <div>
                <GeneratorForm
                  patternLengthLabel={patternLength}
                  numberOfBallsLabel={numberOfBalls}
                  patternLengthValue={patternLengthValue}
                  numberOfBallsValue={numberOfBallsValue}
                  onPatternLengthChange={setPatternLengthValue}
                  onNumberOfBallsChange={setNumberOfBallsValue}
                  onGenerate={handleGenerate}
                />
              </div>
            </div>
            <div className="col-span-1 flex bg-brand-light items-center rounded-lg  shadow-lg overflow-hidden">
              <List title="List 1" items={patternNames} onItemClick={handleListItemClick}/>
            </div>
            <div className="col-span-1 flex bg-brand-light items-center rounded-lg bg-white shadow-lg overflow-hidden">
              <List title="List 2" items={list2} onItemClick={handleListItemClick}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
