import React, {useState} from 'react';
import {Text, FlatList, view} from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  const producRender = ({item: p}) => {
    return (
      <Text>
        {p.id}){p.nome}
      </Text>
    );
  };
  return (
    <>
      <Text style={estilo.txtG}>Lista produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => `${i.id}`}
        renderItem={producRender}
      />
    </>
  );
};
