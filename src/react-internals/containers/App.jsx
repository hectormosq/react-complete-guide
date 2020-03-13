/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useState } from 'react';
import style from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

const App = props => {
  console.log(props);
  const [personsState, setPersonsState] = useState([
    { id: '1', name: 'Hector', age: '29' },
    { id: '2', name: 'Manu', age: '27' },
    { id: '3', name: 'Amy', age: '26' }
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (event, id) => {
    const persons = [...personsState];
    const personIndex = persons.findIndex(item => item.id === id);

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
  if (showPersons) {
    persons = (
      <Persons
        personList={personsState}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      />
    );
  }

  return (
    <div className={style.App}>
      <Cockpit
        showPersons={showPersons}
        personList={personsState}
        buttonHandler={togglePersonsHandler}
      />
      {persons}
    </div>
  );

  // Esto es lo que renderiza el código de arriba, jsx ; P
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now ?'))
};

export default App;
