import React, { useState } from'react';

const donnees = [
  { id: 1, nom: 'Jean', age: 25, ville: 'Paris' },
  { id: 2, nom: 'Marie', age: 30, ville: 'Lyon' },
  { id: 3, nom: 'Pierre', age: 35, ville: 'Marseille' },
  { id: 4, nom: 'Sophie', age: 20, ville: 'Bordeaux' },
  { id: 5, nom: 'Jean-Pierre', age: 40, ville: 'Toulouse' },
];

function Tableau() {
  const [donneesTriees, setDonneesTriees] = useState(donnees);
  const [tri, setTri] = useState({ colonne: 'id', ordre: 'asc' });

  const handleTri = (colonne) => {
    if (tri.colonne === colonne) {
      setTri({ colonne, ordre: tri.ordre === 'asc'? 'desc' : 'asc' });
    } else {
      setTri({ colonne, ordre: 'asc' });
    }
    const donneesTriees = [...donnees];
    donneesTriees.sort((a, b) => {
      if (tri.ordre === 'asc') {
        return a[colonne] < b[colonne]? -1 : 1;
      } else {
        return a[colonne] > b[colonne]? -1 : 1;
      }
    });
    setDonneesTriees(donneesTriees);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleTri('id')}>ID</th>
          <th onClick={() => handleTri('nom')}>Nom</th>
          <th onClick={() => handleTri('age')}>Age</th>
          <th onClick={() => handleTri('ville')}>Ville</th>
        </tr>
      </thead>
      <tbody>
        {donneesTriees.map((donnee) => (
          <tr key={donnee.id}>
            <td>{donnee.id}</td>
            <td>{donnee.nom}</td>
            <td>{donnee.age}</td>
            <td>{donnee.ville}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tableau;