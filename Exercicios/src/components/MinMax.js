import React from "react";
import { Text } from "react-native";
import estilo from "./estilo"




export default props =>  ( /* props = propriedades */
    <Text style={estilo.txtG}> 
        O valor {props.max} e maior que o {props.min}
    </Text> 
)
    