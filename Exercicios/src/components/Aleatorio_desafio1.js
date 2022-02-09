import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default ({min, max}) => {
  /** usando destructuring de codigo gerar novas constantes*/

  const delta = max - min + 1;
  const Aleatorios = parseInt(Math.random() * delta) + min;
  return <Text style={estilo.txtG}>O Numero aleatorio e {Aleatorios}</Text>;
};
