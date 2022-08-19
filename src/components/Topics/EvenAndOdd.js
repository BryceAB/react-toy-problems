import { useState } from "react";

function EvenAndOdd(props) {
  const [evensArray, setEvensArray] = useState([]);
  const [oddsArray, setOddsArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  function clickHandler() {
    let evens = [];
    let odds = [];
    let str = userInput.split(",");
    for (let num of str) {
      if (num % 2 === 0) {
        evens.push(+num);
      } else {
        odds.push(+num);
      }
    }
    setEvensArray(evens);
    setOddsArray(odds);
  }

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Evens and Odds</h4>
      <input
        className="inputLine"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Split
      </button>
      <span className="resultsBox">Evens: {JSON.stringify(evensArray)}</span>
      <span className="resultsBox">Odds: {JSON.stringify(oddsArray)}</span>
    </div>
  );
}

export default EvenAndOdd;
