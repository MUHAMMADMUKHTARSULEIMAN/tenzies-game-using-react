import {useState} from "react";
import Die from "./Die";

export default function Body() {
  let diceArray = [];
  const numOfDice = parseInt(prompt("Choose an even number between 1 and 100 for the number of dice"));

  if(numOfDice >= 2 && numOfDice <= 100) {
    for(let i = 1; i <= numOfDice; i++) {
      diceArray.push({name: "Die " + [i], value: true});
    };
  };
  
  // const [toggle, setToggle] = useState(true);
  // const handleChange = e => {

  }

  const diceMap = diceArray.map(datum => {
    datum = true
    return <Die
    key={datum}
    onClick={() => {
      !datum;
      
    }}
    />
  })
  return (
    <div id="body">
      <p>
        Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
      </p>
      <div id="die-container">
        {diceMap}
      </div>
    </div>
  )
};