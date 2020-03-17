import React, { Component } from 'react';
import style from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.nameChangedHandler = this.nameChangedHandler.bind(this);
    this.deletePersonHandler = this.deletePersonHandler.bind(this);
    console.log('[AppClass] constructor');

    this.state = {
      persons: [
        { id: '1', name: 'Hector', age: '29' },
        { id: '2', name: 'Manu', age: '27' },
        { id: '3', name: 'Amy', age: '26' }
      ],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[AppClass] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[AppClass] ComponentDidMount');
  }

  nameChangedHandler(event, id) {
    const { persons } = this.state;
    const personIndex = persons.findIndex(item => item.id === id);

    if (personIndex > -1) {
      persons[personIndex].name = event.target.value;
      this.setState({
        persons
      });
    }
  }

  deletePersonHandler(personIndex) {
    const { persons } = this.state;
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  }

  togglePersonsHandler() {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons
    });
  }

  render() {
    console.log('[AppClass] - Render');
    const { persons, showPersons } = this.state;
    let renderedPersons = null;
    if (showPersons) {
      renderedPersons = (
        <Persons
          personList={persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={style.App}>
        <Cockpit
          showPersons={showPersons}
          personList={persons}
          buttonHandler={() => this.togglePersonsHandler(this)}
        />
        {renderedPersons}
      </div>
    );
  }

  // Esto es lo que renderiza el código de arriba, jsx ; P
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it works now ?'))
}

export default AppClass;
