import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import estilo from '../estilo';

export default props => {
  <View style={[style.Display, style.Displaytext]}>
    return <Text style={estilo.txtG}>{props.num}</Text>;
  </View>;
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
  },
  Displaytext: {
    color: '#FFF',
  },
});
