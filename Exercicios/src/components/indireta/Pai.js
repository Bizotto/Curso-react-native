import React from 'react';
import Filho from './Filho';

export default props => {
  function exibirValor(numero) {
    console.warn(numero);
  }

  return (
    <>
      <Filho min={1} max={60} funcao={exibirValor} />;
    </>
  );
};
