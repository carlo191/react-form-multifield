import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("Carlo");
  const [names, setNames] = useState([]);

  // Aggiunge un nome alla lista
  const addName = (e) => {
    e.preventDefault();
    if (firstName.trim() !== "") {
      setNames([...names, firstName]); // Aggiunge il nome alla lista
      setFirstName(""); // Resetta l'input
    }
  };

  // Rimuove un nome dalla lista
  const removeName = (indexToRemove) => {
    setNames(names.filter((name,index) => index !== indexToRemove));
  };

  return (
    <>
      <form onSubmit={addName}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Inserisci un nome"
        />
        <button type="submit">Aggiungi Nome</button>
      </form>
      <p>Il tuo nome è {firstName}</p>

      {/* Lista dei nomi */}
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}{" "}
            <button onClick={() => removeName(index)}>
              <i className="fa-solid fa-trash"></i> {/* Icona Font Awesome */}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
