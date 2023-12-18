export default function Body() {
  let diceArray = [];
  let numOfDice = parseInt(prompt("How many players do you want?"));
    if(numOfDice >= 2 && numOfDice <= 100) {
      for(let i = 1; i <= numOfDice; i++) {
        diceArray.push(`Die ${i}`);
      }
    }
  return (
    <div id="body">
      <p>
        Roll until all dice are the same.Click each die to freeze it at its current value between rolls.
      </p>

    </div>
  )
};