import React, { useState } from "react";

function ListeCourses() {
  const [article, setArticle] = useState("");
  const [liste, setListe] = useState([]);

  function handleAjouter() {
    setListe([...liste, article]);  
    setArticle("");                 
  }

  return (
    <div>
      <h2>Liste de courses</h2>
      <input
        type="text"
        placeholder="Ajouter un article"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />
      <button onClick={handleAjouter}>Ajouter</button>

      <ul>
        {liste.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
