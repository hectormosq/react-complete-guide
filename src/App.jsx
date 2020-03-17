/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Hector", age: "29" },
      { name: "Manu", age: "27" },
      { name: "Amy", age: "26" }
    ],
    otherState: "Other State"
  });

  const [otherState] = useState("Otro Estado");

  const switchNameHandler = newName => {
    setPersonsState({
      persons: [
        { name: newName, age: "29" },
        { name: "Manu", age: "27" },
        { name: "Amy", age: "26" }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Hector Joel", age: "29" },
        { name: event.target.value, age: "27" },
        { name: "Amy", age: "26" }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working with OtherState: {otherState}</p>
      <button
        style={style}
        onClick={() => switchNameHandler("Con Arrow Function")}
      >
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        // TODO [Comprobar] - Es preferible usar .bind en lugar de invocar la funcion con arrow function
        // Por temas de eficiencia
        click={switchNameHandler.bind(this, personsState.persons[0].name)}
      >
        My Hobbies: Baseball
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, personsState.persons[1].name)}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
        click={switchNameHandler.bind(this, personsState.persons[2].name)}
      />
    </div>
  );

  // Esto es lo que renderiza el código de arriba, jsx ; P
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now ?'))
};

export default App;
