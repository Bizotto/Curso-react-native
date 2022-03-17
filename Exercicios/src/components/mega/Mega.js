import React, {Component} from 'react';
import {Button, Text, TextInputBase} from 'react-native';
import estilo from '../estilo';

import MegaNumero from './MegaNumero';
export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };
  aterarQtdeNumero = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumero = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
      .sort((a, b) => a - b);
    this.state({numeros: numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return
    });
  };

  render() {
    return (
      <>
        <Text style={estilo.txtG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="quantidade de numeros"
          value={String(this.state.qtdeNumeros)}
          onChangeText={this.aterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        
        <View style ={{
          marginTop:20,
          flexDirection: 'row',
          flexWrap:'wrap',
          judtfyContent:'center'
        }}>
        {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
// uma solucao interessante.
// onChangeText={qtde => this.aterarQtdeNumero(qtde)}

/*gerarNumeros = () => {
  const {qtdeNumeros} = this.state
  const numeros =[]
  for(
    let i= 0; i< qtdeNumeros;i++){
      const n = this.gerarNumeroNaoContido(numeros)
      numeros.push(n)
    }
    numeros.sort((a, b)=> a - b)
    this.setState({numeros})
} 
*/
