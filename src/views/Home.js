
import React from 'react';
import Counter from '../components/counter';
import eonix from'../assets/img/eonix.svg';
import '../style.css';

function Home() {
  return (
    <div className="Home">
    <img src={eonix} alt="logo Eonix"/>
    <h1>Clic Counter - Eonix par Chevalier Alexandre</h1>
    <Counter />
    </div>
  );
}

export default Home;
