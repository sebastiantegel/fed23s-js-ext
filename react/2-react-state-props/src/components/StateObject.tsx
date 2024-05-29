import { useState } from "react";
import { Person } from "../models/Person";

export const StateObject = () => {
  const [person, setPerson] = useState<Person>(
    new Person("Sebastian", 44, true)
  );

  const handleClick = () => {
    console.log("Clickity");

    setPerson({ ...person, name: "Hanna" });
  };

  return (
    <>
      <h3>{person.name}</h3>

      <button onClick={handleClick}>Change name</button>
    </>
  );
};
