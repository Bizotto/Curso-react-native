import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

import Listaprodutosv2 from './components/produtos/ListaprodutosV2';
// import Listaprodutos from './components/produtos/Listaprodutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import Parimpar from './components/Parimpar';
// import Diferenciar from './components/Diferenciar';
// import Contadorv2 from './components/contador/Contadorv2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo'
// import Aleatorios from './components/Aleatorio_desafio1'
// import MinMax from './components/MinMax'
// import X, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
  <SafeAreaView style={style.App}>
    <Listaprodutosv2 />
    {/*
    <Listaprodutos />
    <UsuarioLogado usuario={{nome: 'gui', email: 'gui@gmail.com'}} />
    <Familia>
      <Membro nome="calica" sobrenome="Arruda" />
      <Membro nome="jessica" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="joana" sobrenome="Silva" />
      <Membro nome="juliana" sobrenome="Silva" />
    </Familia>
    <Parimpar />
    <Diferenciar />
    <Contadorv2 />
    <Pai />
    <Pai />
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
  </SafeAreaView>
);
const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
