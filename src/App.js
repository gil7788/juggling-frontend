import React, { useEffect } from "react";
import GeneratorGui from "./components/GeneratorGui.tsx";
import { PatternSelection } from "./components/PatternSelection.tsx";
import JugglingPatternsList from "./components/JugglingPatternsList.tsx"
import { useAppContext } from "./components/AppContext.tsx";


function App() {
  const {
    showJugglingPatterns,
    setShowJugglingPatterns,
    patterns,
    setPatterns,
    patternLength,
    setPatternLength,
    numberOfBalls,
    setNumberOfBalls,
    handleGenerate,
  } = useAppContext();

  useEffect(() => {
    // Load patterns when the component mounts (you can modify this behavior)
    handleGenerate();
  }, []);

  return (
    <div>
      <h1>Your App</h1>
      <GeneratorGui
        setPatternLength={setPatternLength}
        setNumberOfBalls={setNumberOfBalls}
      />
      {/* <PatternSelection />
      {showJugglingPatterns && <JugglingPatternsList patterns={patterns} />} */}
    </div>
  );
}

export default App;
