import React from 'react';
import Person from './Person/Person';

const persons = props => {
  const { personList, clicked, changed } = props;

  return personList.map((person, index) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      click={() => clicked(index)}
      changed={event => changed(event, person.id)}
    />
  ));
};

export default persons;
