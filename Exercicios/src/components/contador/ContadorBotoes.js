import React, {useState} from 'react';
import {Button, Text, View, view} from 'react-native';
import estilo from './estilo';

export default props => {
  return (
    <View>
      <Button title="+" onPress={props.inc} />

      <Button title="-" onPress={props.dec} />
    </View>
  );
};
const style = StyleSheet.create({
  Botoes: {
    FlexDirection: 'row',
  },
});
