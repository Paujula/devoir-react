import React, { useState } from'react';

function Formulaire() {
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nomUtilisateur === '') {
      setErreur('Le nom d\'utilisateur est requis');
    } else if (motDePasse === '') {
      setErreur('Le mot de passe est requis');
    } else {
     
      console.log(`Nom d'utilisateur : ${nomUtilisateur}, Mot de passe : ${motDePasse}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nom d'utilisateur :</label>
      <input type="text" value={nomUtilisateur} onChange={(event) => setNomUtilisateur(event.target.value)} />
      
      <div>
        <label>Mot de passe :</label>
        <input type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} />
      </div>
      {erreur && <p style={{ color:'red' }}>{erreur}</p>}
      <button type="submit">Se connecter</button>
    </form>
  );
}


export default Formulaire;
