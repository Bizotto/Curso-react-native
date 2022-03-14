import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  return (
    <>
      <Text style={estilo.txtG}>lista de produtos</Text>

      {produtos.map(p => {
        return (
          <Text>
            {p.id} {p.nome}{' '}
          </Text>
        );
      })}
    </>
  );
};
