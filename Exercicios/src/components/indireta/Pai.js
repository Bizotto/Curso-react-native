import React, {useState} from 'react';
import Filho from './Filho';
import {Text} from 'react-native';
import estilo from '../estilo';

export default props => {
  const [texto, setTexto] = useState('');
  const [num, setNum] = useState(0);
  function exibirValor(numero) {
    setNum(numero);
    setTexto(texto);
  }

  return (
    <>
      <Text style={estilo.txtG}>
        {texto}
        {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />;
    </>
  );
}
