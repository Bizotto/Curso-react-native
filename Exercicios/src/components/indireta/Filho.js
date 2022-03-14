import React, {useState} from 'react';
import {Button, Text, view} from 'react-native';
import estilo from './estilo';

export default props => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <Button
      tittle="Executar"
      onPress={function () {
        gerarNumero(props.min, props.max);
      }}
    />
  );
};
