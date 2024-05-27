import { useState } from "react";

export const Hooks = () => {
  const [age, setAge] = useState<number>(0);

  const increase = () => {
    setAge(age + 1);
  };

  console.log("Age after update:", age);
  console.log("Running hooks");

  return (
    <div className="hooks">
      <h3>State</h3>
      <div>
        <button onClick={increase}>Öka</button>
        {age}
      </div>
    </div>
  );
};
