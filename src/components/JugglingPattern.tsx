import React from "react";


// Recieve following arguments "_dwell_time", "_gravity", "_number_of_balls", "_number_of_hands", "_pattern" (list) 
export default function JugglingPattern(props) {
    const { dwell_time, gravity, number_of_balls, number_of_hands, pattern } = props
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
}