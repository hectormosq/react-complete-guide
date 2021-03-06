/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from "react";
import style from "./App.module.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState([
    { id: "1", name: "Hector", age: "29" },
    { id: "2", name: "Manu", age: "27" },
    { id: "3", name: "Amy", age: "26" }
  ]);
  const [otherState] = useState("Otro Estado");
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event, id) => {
    const persons = [...personsState];
    const personIndex = persons.findIndex(item => {
      return item.id === id;
    });

    if (personIndex > -1) {
      persons[personIndex].name = event.target.value;
      setPersonsState(persons);
    }
  };

  const deletePersonHandler = personIndex => {
    const persons = [...personsState];
    persons.splice(personIndex, 1);
    setPersonsState(persons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  let persons = null;
  let btnClass = '';
  if (showPersons) {
    persons = (
      <div>
        {personsState.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              changed={event => nameChangedHandler(event, person.id)}
            />
          );
        })}
      </div>
    );
  }

  let classes = [];
  if (personsState.length <= 2) {
    classes.push(style.Red);
  }
  if (personsState.length <= 1) {
    classes.push(style.Bold);
  }
  if (showPersons) {
    btnClass = style.Red
  }

  return (
    <div className={style.App}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(" ")}>
        This is really working with OtherState: {otherState}
      </p>
      <button
        className={btnClass}
        onClick={togglePersonsHandler.bind(this)}
      >
        Toggle Persons
      </button>
      {persons}
    </div>
  );

  // Esto es lo que renderiza el código de arriba, jsx ; P
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now ?'))
};

export default App;
