// PatternSelection.tsx
import React, { useState } from "react";

interface PatternSelectionProps {
  onStart: (pattern: string) => void;
  onPausePlay: () => void;
}

export const PatternSelection: React.FC<PatternSelectionProps> = ({
  onStart,
  onPausePlay,
}) => {
  const [pattern, setPattern] = useState("");

  const handleStart = () => {
    onStart(pattern);
  };

  return (
    <div>
      <h2>Pattern Selection:</h2>
      <div>
        <label htmlFor="pattern">Pattern:</label>
        <input
          type="text"
          id="pattern"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
        />
      </div>
      <button onClick={handleStart}>Start</button>
      <button onClick={onPausePlay}>Pause/Play</button>
    </div>
  );
};
