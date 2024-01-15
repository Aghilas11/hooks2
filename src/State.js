import React, { useState } from "react";

const State = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const theFirst = (e) => {
    setInputValue(e.target.value);
  };

  const addTaches = () => {
    setArray([...array, inputValue]);
    setInputValue("");
  };

  const deleteTask = (index) => {
    const updateTask = array.filter((_, i) => i !== index);
    setArray(updateTask);
  };

  return (
    <div>
      <h1>useState</h1>
      <label>
        Les taches :
        <input type="text" value={inputValue} onChange={theFirst} />
      </label>
      <button onClick={addTaches}>Ajouter</button>
      <ul>
        {array
          .slice() // Crée une copie du tableau pour éviter de modifier l'état directement
          .sort((a, b) => a.localeCompare(b))
          .map((array, index) => (
            <li key={index} onClick={() => deleteTask(index)}>
              {array}
              {/* <button onClick={() => deleteTask(index)}>Supprimer</button> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default State;
