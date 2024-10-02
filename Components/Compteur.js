import React, { useState } from 'react';

function Compteur(){
    const [compter, setCompter] = useState(1);

    const increment = () => {
        setCompter(compter +5);
    };

    const reset = () => {
        setCompter(1);
    };

    return(
        <div>
            <h1> Mon compteur: {compter}</h1>
            <button onClick={increment}>Incrémenter</button>
            <div>
                <button onClick={reset} >Réinitialiser</button>
            </div>
        </div>
    );
}

export default Compteur;