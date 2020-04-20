import React from "react";
import Person from "./Person/Person"


const persons = (props) => props.persons.map((person, index) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            project={person.project}
            changed={(e) => props.changed(e, person.id)}
            click={() => props.clicked(index)}
          />
        );
      });

      export default persons;