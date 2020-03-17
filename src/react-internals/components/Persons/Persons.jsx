import React, { useEffect } from 'react';
import Person from './Person/Person';

const Persons = props => {
  const { personList, clicked, changed } = props;

  useEffect(() => {
    console.group('[Persons] useEffect general');
    console.groupEnd();
    return () => {
      // Clean up
      console.log('Destroying persons');
    };
  }, []);

  useEffect(() => {
    console.group('[Persons] useEffect for person');
    console.log('Le Person', personList);
    console.groupEnd();
  }, [props.personList, personList]);

  return personList.map((person, index) => {
    console.log('[Person] - Rendering');
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => clicked(index)}
        changed={event => changed(event, person.id)}
      />
    );
  });
};

export default Persons;
