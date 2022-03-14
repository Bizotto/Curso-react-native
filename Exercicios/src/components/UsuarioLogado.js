import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';
import If from './If';

export default props => {
  const usuario = props.usuario || {};
  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={estilo.txtG}>Usuario Logado:</Text>
        <Text style={estilo.txtG}>
          {usuario.nome}-{usuario.email}
        </Text>
      </If>
    </>
  );
};
