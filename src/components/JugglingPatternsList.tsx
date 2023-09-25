import React from "react";
import JugglingPattern from "./JugglingPattern.tsx";




// Recieve json data as patterns with patterns with the folloing props "_dwell_time", "_gravity", "_number_of_balls", "_number_of_hands", "_pattern" (list) 
//  and populate list with JugglingPattern components
// assume their is no id to pattern, use enumerate to create id
export default function JugglingPatternsList({ patterns }) {
    // print pattern with text before JugglingPatternsList
    console.log("JugglingPatternsList"  + patterns.toString())
    return (
        <div>
        <h1>Juggling Patterns</h1>
        <ul>
            {patterns.map((pattern, index) => (
                <li key={index}>
                    <JugglingPattern
                        dwell_time={pattern._dwell_time}
                        gravity={pattern._gravity}
                        number_of_balls={pattern._number_of_balls}
                        number_of_hands={pattern._number_of_hands}
                        pattern={pattern._pattern}
                    />
                </li>
            ))}
        </ul>
        </div>
    );
}
