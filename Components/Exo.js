import React, { useState } from 'react';

function Exo() {
    const [compte, setCompte] = useState(0);
    const [nom, setNom] = useState('Jean');
    const [listeDeNoms,setlisteDeNoms] = useState(["Pierre","Marie","Joseph"]);
    const [conte, setConte] = useState(5);


    const incrementer = () => {
        setCompte(compte + 1);
    };

    const mettreAJourNom = (nouveauNom) => {
        setNom(nouveauNom);
    };

    const supprimerNom = (nomASupprimer) => {
        setlisteDeNoms(listeDeNoms.filter((nom) => nom!== nomASupprimer))
    }

    const afficherCompte = () =>{
        setConte(conte + 10);
    }
    return (
        <div>
                <h1>Mon compteur: {compte}</h1>
                <button onClick={incrementer}>Incrémenter</button> 
            <div>
                <label>Nouveau nom {mettreAJourNom} :</label>
                <input type="text" value={nom} />
            </div>
            <div>
                <label>Nom à supprimer {supprimerNom} :</label>
                <input type="text" value={listeDeNoms} />
            </div>
            <div>
                <h1>Mon conte: {conte}</h1>
                <button onClick={afficherCompte}>Afficher mon compte</button> 
            </div>
        </div>
    );
}

export default Exo;
