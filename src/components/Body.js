import Confetti from "react-confetti"
import {useWindowSize} from "react-use"
import {useState} from "react";
import Die from "./Die";

export default function Body() {
  let diceArray = [];
  const{width, height} = useWindowSize()

  const numOfDice = 10;
  if(numOfDice >= 10 && numOfDice <= 100 && numOfDice % 5 === 0) {
      for(let i = 1; i <= numOfDice; i++) {
        diceArray.push({name: "Die " + [i], value: "", on: true});
      };
    };
  
  const [dice, setDice] = useState(diceArray);
  const allEqual = arr => arr.every(v => v.value === arr[0].value);
  // const allNotZero = arr => arr.every(v => v.value !== 0);
  const allFalse = arr => arr.every(v => v.on === false);

  const toggle = name => {
    setDice(prevDie => {
      return prevDie.map(die => {
        return die.name === name ? {...die, on: !die.on} : die;
      });
    });
  };

  const rollDice = () => {
    setDice(prevDie => {
      return prevDie.map(die => {
        return die.on === true ? {...die, value: Math.ceil(Math.random() * 6)} : die;
      });
    });

    // for(let i = 0; i < dice.length; i++) {
    //   if(dice[i].on === true) {
    //     dice[i].value = Math.ceil(Math.random() * 6);
    //   }
    //   else {
    //     dice[i].value = 
    //   }
    // };
  };

  const resetGame = () => {
    window.location.reload();
  }

  const diceMap = dice.map(die => {
    return (
    <Die
    toggle={toggle}
    key={die.name}
    {...die}
    />
    );
  });

  
  
  
  return (
    <div id="body">
      {allEqual(dice) && allFalse(dice) && <Confetti width={width} height={height} recycle={false}/>}

      <div id="text-container">
        <p>
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </p>
      </div>

      <div id="dice-container">
        {diceMap}
      </div>

      <div id="button-container">
        <button onClick={allEqual(dice) && allFalse(dice) ? resetGame : rollDice}>{allEqual(dice) && allFalse(dice) ? "Reset Game" : "Roll"}</button>
      </div>
    </div>
  );
};