import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  function obterLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id}>
          {p.id}
          {p.nome} tem o valor de R$ {p.preco}
        </Text>
      );
    });
  }
  return (
    <>
      <Text style={estilo.txtG}>Lista produtos</Text>
      {obterLista()}
    </>
  );
};
