import React, {Component} from 'react';
import {Text, TextInputBase} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [], 
  };
  aterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumero = () => {
    this.state({numeros:[ ]})
  }

  gerarNumeroNaoContido = nums =>{
    const novo = parseInt(Math.random() * 60 ) + 1
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums): novo
  }

  render() {
    return (
      <>
        <Text style={estilo.txtG}>
          Gerador de Mega-Sena
          {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="quantidade de numeros"
          value={String(this.state.qtdeNumeros)}
          onChangeText={this.aterarQtdeNumero}
        />
      </>
    );
  }
}
// uma solucao interessante.
// onChangeText={qtde => this.aterarQtdeNumero(qtde)}
