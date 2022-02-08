import React from 'react'   
import {View, StyleSheet } from 'react-native'


import X, { Comp1, Comp2 } from './components/Multi'
import Primeiro from './components/Primeiro'


export default () => (

    <View style={style.App}>
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro  />
    </View> 

) 
const style=StyleSheet.create({
    App: {
        
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})

