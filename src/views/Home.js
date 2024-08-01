
import React, { useState } from 'react';

function Home() {
  // Déclare une nouvelle variable d'état, que nous appellerons "compte"
  const [compte, setCompte] = useState(0);
  
  return (
   
    <button onClick={() => setCompte(compte + 1)}>
    Vous avez cliqué {compte} fois
    </button>
  
  );
}

export default Home;
