import React, { useState } from "react";

function FilterObject() {
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);
  const [unfilteredArray, setUnfilteredArray] = useState([
    { name: "Jimmy Joe", title: "Hacker", age: 12 },
    { name: "Reagan", title: "Pop Star", hairColor: "brown" },
    { name: "Andrew", title: "Web Developer", isCool: true },
  ]);

  const clickHandler = () => {
    let results = [];
    unfilteredArray.map((person) => {
      person.hasOwnProperty(userInput) && results.push(person);
    });
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unfilteredArray)}</span>
      <input
        className="inputLine"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button className="confirmationButton" onClick={clickHandler}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
}

export default FilterObject;
