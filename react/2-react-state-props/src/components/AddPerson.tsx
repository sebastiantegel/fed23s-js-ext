import { ChangeEvent, FormEvent, useState } from "react";
import { Person } from "../models/Person";

export const AddPerson = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState(0);
  //   const [isMarried, setIsMarried] = useState(false);
  const [personForm, setPersonForm] = useState<Person>({
    name: "",
    age: 0,
    isMarried: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;
    if (e.target.type === "text") {
      setPersonForm({ ...personForm, [property]: value });
    }
    if (e.target.type === "number") {
      setPersonForm({ ...personForm, [property]: +value });
    }
    if (e.target.type === "checkbox") {
      setPersonForm({ ...personForm, [property]: e.target.checked });
    }
  };

  //   const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setAge(+e.target.value);
  //   };

  //   const handleIsMarriedChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     setIsMarried(e.target.checked);
  //   };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();

    setPersons([
      ...persons,
      new Person(personForm.name, personForm.age, personForm.isMarried),
    ]);
  };

  return (
    <>
      {JSON.stringify(personForm)}
      <form onSubmit={handleSave}>
        <input
          placeholder="Namn"
          value={personForm.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="number"
          placeholder="Ålder"
          value={personForm.age}
          onChange={handleChange}
          name="age"
        />
        <input
          type="checkbox"
          checked={personForm.isMarried}
          onChange={handleChange}
          name="isMarried"
        />
        <button>Spara</button>
      </form>
      <section>
        {persons.map((p, i) => (
          <div key={i}>
            {p.name} - {p.age}
          </div>
        ))}
      </section>
    </>
  );
};
