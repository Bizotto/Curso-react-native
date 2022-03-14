import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';

export default props => {
  return (
    <Text style={estilo.txtG}>
      {props.nome} {props.sobrenome}
    </Text>
  );
};