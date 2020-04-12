
import styled from "styled-components";
import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? "red" : "green"};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? "pink" : "lightgreen"};
    color: black;
  }
`;

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
      persons
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

  const style = {
    backgroundColor: "pink",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "lightgreen",
      color: "black"
    }
  };

  let persons = null;
  if (showPersonsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(e) => nameChangedHandler(e, person.id)}
              click={() => deletePersonHandler(index)}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "plum";
    style[ ":hover"] = {
      backgroundColor: "salmon",
      color: "black"
    };
  }

  const classes = [];
  if(personsState.persons.length <= 2) {
    classes.push("red");
  }
  if(personsState.persons.length <= 1) {
    classes.push("burlywood");
    console.log(classes);
  }

  return (
    <div className="App">
    <p className={classes.join(" ")}>This is really working</p>
      <StyledButton alt={showPersonsState.showPersons} onClick={togglePersonsHandler}>
        Switch Name
      </StyledButton>
      {persons}
    </div>
  );
};

export default App;
