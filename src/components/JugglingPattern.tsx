import React from "react";

interface JugglingPatternProps {
  dwell_time: string;
  gravity: string;
  number_of_balls: string;
  number_of_hands: string;
  pattern: string;
}


// TODO consider to merge with Pattern.tsx
const JugglingPattern: React.FC<JugglingPatternProps> = (props:JugglingPatternProps) => {
  const { dwell_time, gravity, number_of_balls, number_of_hands, pattern } = props;
  return (
    <div>
      <h2>{pattern}</h2>
      <ul>
        <li>Dwell Time: {dwell_time}</li>
        <li>Gravity: {gravity}</li>
        <li>Number of Balls: {number_of_balls}</li>
        <li>Number of Hands: {number_of_hands}</li>
      </ul>
    </div>
  );
};

export default JugglingPattern;
