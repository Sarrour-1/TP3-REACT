import React, { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState(""); 

  function handleClick() {
    alert(`Bonjour, ${nom} !`);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)} 
      />
      <button onClick={handleClick}>Envoyer</button>
    </div>
  );
}

export default Formulaire;
