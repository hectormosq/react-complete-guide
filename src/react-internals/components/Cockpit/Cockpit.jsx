import React from 'react';
import style from './Cockpit.module.css';

const cockpit = props => {
  const { showPersons, personList, buttonHandler } = props;
  const classes = [];
  let btnClass = '';

  if (showPersons) {
    btnClass = style.Red;
  }
  if (personList.length <= 2) {
    classes.push(style.Red);
  }
  if (personList.length <= 1) {
    classes.push(style.Bold);
  }
  if (showPersons) {
    btnClass = style.Red;
  }
  return (
    <div className={style.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        type="button"
        className={btnClass}
        onClick={buttonHandler.bind(this)}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
