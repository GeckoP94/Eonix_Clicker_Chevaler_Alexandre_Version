import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import '@testing-library/jest-dom/extend-expect'; // Cette ligne peut être nécessaire car avec ligne de base l'import ne fonctionnait pas avec cette configuration.
import 'mutationobserver-shim';

// https://testing-library.com/docs/dom-testing-library/api-async - Documentation de test qui m'a permis de simplfier et faire fonctionner mon composant de test

//Besoin d'utiliser une fonction asychorne pour utiliser le await

test('increments and decrements count on button click', async () => {
  
render(<Counter />);
  
// Vérifier que le compteur commence à 0
let countElement = screen.getByTestId('superCompteur');
expect(countElement).toHaveTextContent('0');
  
// Test au clic sur le Btn trigger de l'event incrémentation pour voir si la valeur passe à 1 - ce qui prouve que le compteur fonctionne
  const buttonIncerment = screen.getByRole('button', {name: 'Incrémenter la valeur de compteur'})
  fireEvent.click(buttonIncerment)
  await screen.findByText('1')

// Test au clic sur le Btn trigger de l'event décrémentation pour voir si la valeur passe à 0 - ce qui prouve que le compteur fonctionne dans les deux sens.
  const buttonDecrement = screen.getByRole('button', {name: 'Décrémenter la valeur du compteur'})
  fireEvent.click(buttonDecrement)
  await screen.findByText('0')  

});






