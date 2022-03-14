import React, {useState} from 'react';
import {Text, view} from 'react-native';
import estilo from '../estilo';
import Membro from './Membro';

export default props => {
  return (
    <>
      <Membro nome="Joana" sobrenome="Silva" />

      <Membro nome="Juliana" sobrenome="Silva" />
    </>
  );
};
