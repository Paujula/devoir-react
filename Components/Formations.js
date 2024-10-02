import React, { useState, useEffect } from 'react';

function Formations() {
  const [formations, setFormations] = useState([]);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const chargerFormations = async () => {
      try {
        const response = await fetch('https://mten.ficatgroup.com/api/v1/formations-listes');
        const données = await response.json();
        
        setFormations(données.data); 
      } catch (erreur) {
        setErreur(erreur.message);
      }
    };

    chargerFormations();
  }, []);

  if (erreur) {
    return <p>Erreur : {erreur}</p>;
  }

  return (
    <ul>
      {formations.map((formation) => (
        <li key={formation.id}>
          <h2>{formation.nom}</h2>
          <p>{formation.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Formations;
