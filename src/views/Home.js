
import React, { useState } from 'react';

// Je garde la fonction le nom de la fonction Home, car déja correctement appelé dans l'ensemble du template kit
function Home() {
  // Déclare une nouvelle variable d'état, que nous appellerons "compte"
  const [compte, setCompte] = useState(0);
  const incrementCount = () => {
    setCompte(compte + 1);
  };
  
  const decrementCount = () => {
    if (compte > 0) {
      setCompte(compte - 1);
    }
  };
  
  return (
    <div className='sectionCounter'>
    <h1>{compte}</h1>
    <button onClick={incrementCount}>
    Incrémenter la valeur de compteur
    </button>
    <button onClick={decrementCount}>
    Décrémenter la valeur du compteur
    </button>
    </div>
  );
}

export default Home;
