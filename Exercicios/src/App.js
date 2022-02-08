import React from 'react'   
import {View, StyleSheet } from 'react-native'

import Aleatorios from './components/Aleatorio_desafio1'


// import MinMax from './components/MinMax'
// import X, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (

    <View style={style.App}>
       <Aleatorios min= {1} max={60} />
       <Aleatorios min= {1} max={60} />
       <Aleatorios min= {1} max={60} />
       <Aleatorios min= {1} max={60} />
       <Aleatorios min= {1} max={60} /> 
       <Aleatorios min= {1} max={60} />
       {/* <MinMax min={1} max={100}/>
        <MinMax min={100} max={200}/>
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro  /> */}
    </View> 

) 
const style=StyleSheet.create({
    App: {
        
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }

})

