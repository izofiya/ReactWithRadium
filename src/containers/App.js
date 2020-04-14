import React, { useState } from "react";
import classes from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "111", name: "Zoi", age: "33" },
      { id: "112", name: "Alex", age: "38" },
      { id: "122", name: "Dem", age: "48" },
    ],
    otherState: "some other value",
    showPersons: false,
  });
  const [showPersonsState, setShowPersonsState] = useState({
    showPersons: false,
  });

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...personsState.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons,
    });
  };

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState.showPersons;
    setShowPersonsState({
      showPersons: !doesShow,
    });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1); // starting at index position, delete 1 element and return the changed array
    setPersonsState({ persons });
  };

  let persons = null;
  if (showPersonsState.showPersons) {
    persons = <Persons
          persons={personsState.persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />;
  }

  return (
    <div className={classes.app}>
      <Cockpit 
        persons={personsState.persons}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
};

export default App;
