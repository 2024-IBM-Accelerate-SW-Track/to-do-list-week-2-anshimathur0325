import React, { useState } from "react";
import "../component/RandomThing.css";

const RandomWorkout = () => {
    const ws =["Practice learning Hindi", "Read another chapter of Pride and Prejudice", "Start/Continue a certification course", " Do a problem on Leetcode", "Go to the gym", "Draw anything for 10 mins","Take a nap", "Embroider something", "Facetime friends"]; 
    const getWorkout = () => {
        return ws[Math.floor(Math.random() * ws.length)];
    };
    const [workout, setW] = useState(getWorkout());
    const newWorkout = () => {
        setW(getWorkout());
    };
    return (
        <div className = "d">
            <div className = "Box">

        <h1>Generate a Random Activity:</h1>
        <p style={{borderBottom:"2px solid black"}}>{workout}</p>
        <button style={{color: "white", backgroundColor: "#d64045", borderRadius:"15px", border:"2px solid white", padding:"15px"}} onClick={newWorkout}> 
            New Activity
        </button>
        </div>
        </div>
    );
};
export default RandomWorkout;