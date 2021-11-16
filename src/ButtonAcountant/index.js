import React from 'react';
import './Buttons.css';

function ButtonAcountant(props) {
  return (
    <div className="container-btn">
      <button
        onClick={props.increaseNumber}
        type="button"
        className="btn btn-Aumentar"
      >
        Aumentar
      </button>
      <button
        onClick={props.subtractNumber}
        type="button"
        className="btn btn-Disminuir"
      >
        Disminuir
      </button>
      <button
        onClick={props.resetNumber}
        type="button"
        className="btn btn-Recetear"
      >
        Recetear
      </button>
    </div>
  );
}

export { ButtonAcountant };
