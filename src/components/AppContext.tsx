import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
export function AppProvider({ children }: { children: React.ReactNode }) {  const [showJugglingPatterns, setShowJugglingPatterns] = useState(false);
  const [patterns, setPatterns] = useState([]);
  const [patternLength, setPatternLength] = useState("");
  const [numberOfBalls, setNumberOfBalls] = useState("");

  // handle generate button click. Recevie patternLength and numberOfBalls from user input. send GET request to backend.
  //  On success setpattern to data received other wise log error
  const handleGenerate = () => {
    // Send a GET request to the backend
    fetch(`http://localhost:5000/generate?patternLength=${patternLength}&numberOfBalls=${numberOfBalls}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend and set it in state
        const data_array = Object.values(data);
        console.log("Type of generatedPatterns:", typeof data.generatedPatterns);
        console.log("generatedPatterns:", data.generatedPatterns);
        console.log("First generatedPatterns:", data.generatedPatterns[0]);
        console.log("Type of data_array:", typeof data_array);
        const parsed_patterns =data.generatedPatterns.map((pattern) => { JSON.parse(pattern) });
        
        console.log(parsed_patterns);
        setPatterns(parsed_patterns);
        // Show the JugglingPatternsList component
        setShowJugglingPatterns(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <AppContext.Provider
      value={{
        showJugglingPatterns,
        setShowJugglingPatterns,
        patterns,
        setPatterns,
        patternLength,
        setPatternLength,
        numberOfBalls,
        setNumberOfBalls,
        handleGenerate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
