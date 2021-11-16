import React from 'react';
import './Accountant.css'

function Acountant(acountantNumber) {
  const hola = Object.values(acountantNumber);

  return <h2> Contador: {hola[0]} </h2>;
}

export { Acountant };
