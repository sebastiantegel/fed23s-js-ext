import { useState } from "react";
import { Person } from "../models/Person";

export const StateList = () => {
  const [persons, setPersons] = useState<Person[]>([
    new Person("Sebastian", 44, true),
    new Person("Hanna", 44, true),
  ]);

  const handleAdd = () => {
    setPersons([...persons, new Person("Lasse", 58, false)]);
  };

  const handleRemove = (person: Person) => {
    setPersons(persons.filter((p) => person.name !== p.name));
  };

  // const handleRemove = (i: number) => {
  //   const copy = [...persons];
  //   copy.splice(i, 1);
  //   setPersons(copy);
  // };

  const handleBirthday = (person: Person) => {
    setPersons(
      persons.map((p) => {
        if (p.name === person.name) {
          return { ...p, age: p.age + 1 };
        } else {
          return p;
        }
      })
    );
  };

  return (
    <>
      <button onClick={handleAdd}>Lägg till</button>

      {persons.map((p, i) => (
        <div key={i}>
          {p.name} - {p.age}
          <button
            onClick={() => {
              handleRemove(p);
            }}
          >
            Ta bort
          </button>
          <button onClick={() => handleBirthday(p)}>Fyll år</button>
        </div>
      ))}
    </>
  );
};
