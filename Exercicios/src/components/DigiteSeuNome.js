import React, {useState} from 'react'
import {Text, TextInput, View, } from 'react-native'
import estilo from './estilo'

export default props => {
  const [nome, setNome] =useState('Teste') 
    return (
        <View> 
          <Text style={estilo.txtG} >
            {nome}
          </Text>
          <TextInput style={estilo.txtG} 
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={nome => setNome(nome)}
          />
        </View>
    )
}