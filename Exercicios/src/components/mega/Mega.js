import React, {Component} from 'react';
import {Text, TextInputBase} from 'react-native';
import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
  };
  aterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: qtde});
  };
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
          value={this.state.qtdeNumeros}
          onChangeText={this.aterarQtdeNumero}
        />
      </>
    );
  }
}
// uma solucao interessante.
// onChangeText={qtde => this.aterarQtdeNumero(qtde)}
