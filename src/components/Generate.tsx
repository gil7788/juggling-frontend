import React, { useState } from "react";
import GeneratorForm from "./GeneratorForm";

interface GenerateProps {
  patternLength: string;
  numberOfBalls: string;
}

export default function Generate(props: GenerateProps) {
  const { patternLength, numberOfBalls } = props;
  const [patternLengthValue, setPatternLengthValue] = useState("");
  const [numberOfBallsValue, setNumberOfBallsValue] = useState("");
  const [apiUrl, setApiUrl] = useState(""); // State to store API URL

  const handleGenerate = () => {
    console.log("patternLengthValue:", patternLengthValue);
    console.log("numberOfBallsValue:", numberOfBallsValue);

    // Construct the API URL
    const apiUrl = `http://localhost:5000/generate?patternLength=${patternLengthValue}&numberOfBalls=${numberOfBallsValue}`;
    setApiUrl(apiUrl); // Set the API URL in state
  };

  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <div className="form-group px-8 py-6 items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <h1 className="text-2xl font-bold text-gray-800 mt-2 ml-6">Generate</h1>

        <GeneratorForm
          patternLengthLabel={patternLength}
          numberOfBallsLabel={numberOfBalls}
          patternLengthValue={patternLengthValue}
          numberOfBallsValue={numberOfBallsValue}
          onPatternLengthChange={setPatternLengthValue}
          onNumberOfBallsChange={setNumberOfBallsValue}
          onGenerate={handleGenerate}
        />
        <h2 className="text-xl text-gray-900 mt-4">patternLengthValue: {patternLengthValue}</h2>
        <h2 className="text-xl text-gray-900">numberOfBallsValue: {numberOfBallsValue}</h2>
        <p className="mt-2 text-gray-600">URL: {apiUrl}</p>
        {/* Your Fetch component can be added here */}
      </div>
    </div>
  );
}
