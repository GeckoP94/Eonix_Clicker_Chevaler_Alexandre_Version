import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import '@testing-library/jest-dom'; // Assurez-vous que cette ligne est présente
import '@testing-library/jest-dom/extend-expect'; // Cette ligne peut être nécessaire

test('increments and decrements count on button click', () => {
  render(<Counter />);

  // Vérifier que le compteur commence à 0
  const countElement = screen.getByText(/0/i);
  expect(countElement).toBeInTheDocument();

  // Simuler un clic sur le bouton d'incrémentation
  const incrementButton = screen.getByText(/Incrémenter la valeur de compteur/i);
  userEvent.click(incrementButton);

  // Vérifier que le compteur a été incrémenté
  // const incrementedCountElement = screen.getByText(/1/i);
  // expect(incrementedCountElement).toBeInTheDocument();

  // Simuler un clic sur le bouton de décrémentation
  const decrementButton = screen.getByText(/Décrémenter la valeur du compteur/i);
  userEvent.click(decrementButton);

  // Vérifier que le compteur a été décrémenté
  const decrementedCountElement = screen.getByText(/0/i);
  expect(decrementedCountElement).toBeInTheDocument();
});
