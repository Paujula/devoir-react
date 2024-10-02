import React from 'react';
import Compteur from './Components/Compteur';
import Formulaire from './Components/Formulaire';
import Tableau from './Components/Tableau';
import Exo from './Components/Exo';

import Horloge from './Components/Horloge';
import Formation from './Components/Formations';
import Context from './Components/Context';


function App() {
  return (
    <div>
      <h1>Exercice : Un Compteur</h1>
      < Compteur/>
     
      < Formulaire/>
      < Tableau/>
      < Exo/>
      < Horloge/>
    
      < Formation/>
      < Context/>

    </div>
  );
}

export default App;
