import React, { useState } from "react";
import FormFactory from "./FormFactory";
// import Fetch from "./Fetch";

interface GeneratorGuiProps {
  patternLength: string;
  numberOfBalls: string;
}

export default function GeneratorGui(props: GeneratorGuiProps) {
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
    <>
      <FormFactory
        patternLengthLabel={patternLength}
        numberOfBallsLabel={numberOfBalls}
        patternLengthValue={patternLengthValue}
        numberOfBallsValue={numberOfBallsValue}
        onPatternLengthChange={setPatternLengthValue}
        onNumberOfBallsChange={setNumberOfBallsValue}
        onGenerate={handleGenerate}
      />
      <h2>patternLengthValue: {patternLengthValue}</h2>
      <h2>numberOfBallsValue: {numberOfBallsValue}</h2>
      <p>URL: {apiUrl}</p>
      {/* {apiUrl && (
        <Fetch
          url={apiUrl}
          renderSuccess={(data: any) => {console.log("data:", data); return <pre>{JSON.stringify(data, null, 2)}</pre>}}
          renderLoading={() => <h1>Loading...</h1>}
          renderError={(error) => (
            <pre>Error!{JSON.stringify(error, null, 2)}</pre>
          )}
        />
      )} */}
    </>
  );
}
