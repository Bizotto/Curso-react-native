import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';

export default props => {
  return (
    <>
      <Text style={estilo.txtG}>{props.a}</Text>
      <Text style={estilo.txtG}>{props.b}</Text>
    </>
  );
};
