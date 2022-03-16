import React, {useState} from 'react'
import {Text, View, view} from 'react-native'

export default props => {
     const lado = 50 
    return (
       <Views style={{
       height: lado,
       width: lado,
       backgroundColor: props.cor || '#000',
     }}
       />
    )
}

