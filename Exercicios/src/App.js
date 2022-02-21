import React from 'react';
import {View, StyleSheet} from 'react-native';
import Pai from './components/direta/Pai';

// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo'
// import Aleatorios from './components/Aleatorio_desafio1'
// import MinMax from './components/MinMax'
// import X, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
  <View style={style.App}>
    <Pai />
    {/*
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo principal= "Cadastro de produto " 
      secundario="Tela de cadastro"/>
      <Aleatorios min= {1} max={60} />
      <Aleatorios min= {1} max={60} />
      <Aleatorios min= {1} max={60} />
      <Aleatorios min= {1} max={60} />
      <Aleatorios min= {1} max={60} /> 
      <Aleatorios min= {1} max={60} />
      <MinMax min={1} max={100}/>
      <MinMax min={100} max={200}/>
      <X />
      <Comp1 />
      <Comp2 />
      <Primeiro  /> */}
  </View>
);
const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
