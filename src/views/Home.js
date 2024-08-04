
import React, { useState, useEffect } from 'react';


// Je garde la fonction le nom de la fonction Home, car déja correctement appelé dans l'ensemble du template kit
function Home() {
  // Déclare une nouvelle variable d'état, que nous appellerons "compte"
  const [compte, setCompte] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (compte < 0) {
      setMessage('Hola jeune malandrin, le compteur est en négatif, ça ne va nieu');
    } else {
      setMessage('le compteur est en positif good job');
    }
  }, [compte]); // Le hook useEffect se déclenche lorsque la variable count change
  
  return (
    <div className='sectionCounter'>
    <h1>{compte}</h1>
    <button onClick={() => setCompte(compte + 1)}>
    Incrémenter la valeur de compteur
    </button>
    <button onClick={() => setCompte(compte - 1)}>
    Décrémenter la valeur du compteur
    </button>
    <p>{message}</p>
    </div>
  );
}

export default Home;
