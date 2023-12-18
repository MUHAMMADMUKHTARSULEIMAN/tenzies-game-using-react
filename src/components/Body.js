import {useState} from "react";
import Die from "./Die";

export default function Body() {
  let diceArray = [];

  const numOfDice = parseInt(prompt("Choose an even number between 1 and 100 for the number of dice"));
  if(numOfDice >= 2 && numOfDice <= 100) {
    for(let i = 1; i <= numOfDice; i++) {
      diceArray.push({name: "Die " + [i], value: "", on: true});
    };
  };
  
  const [state, setState] = useState(diceArray);

  const toggle = name => {
    setState(prevState => {
      return prevState.map(state => {
        return state.name === name ? {...state, state: !state.on} : state;
      })
    })
  }

  const rollDice = e => {
    // e.preventDefault;
    for(let i = 0; i < diceArray; i++) {
      if(diceArray[i].on) {
        diceArray[i].value = Math.ceil(Math.random() * 6);
      }
    }
  }

  const diceMap = diceArray.map(die => {
    return (
    <Die
    toggle={toggle}
    key={die.name}
    {...die}
    />
    )
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