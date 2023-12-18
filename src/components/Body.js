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
  
  const [dice, setDice] = useState(diceArray);

  const toggle = name => {
    setDice(prevState => {
      return prevState.map(state => {
        return state.name === name ? {...state, on: !state.on} : state;
      })
    })
  }

  const rollDice = e => {
    e.preventDefault();
    for(let i = 0; i < dice; i++) {
      if(dice[i].on) {
        dice[i].value = Math.ceil(Math.random() * 6);
      }
    }
  }

  const diceMap = dice.map(die => {
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
      <div id="text-container">
        <p>
          Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
        </p>
      </div>

      <div id="die-container">
        {diceMap}
      </div>
      
      <button onClick={rollDice}>Roll</button>
    </div>
  )
};