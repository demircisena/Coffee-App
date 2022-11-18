import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { theme1 } from '../theme';

const OrdersCard = () => {
  return (
    <TouchableOpacity style={{
        width:"95%",
        height:"34%",
        borderColor: theme1.lightBrown,

        }}>
        <View>
        <Image source={require("../../assets/images/coffee-cup.png")} style={{
             height: "70%",
             width: "50%",
             position: "absolute",
             top: "20%",
        }} />

        </View>
      
    </TouchableOpacity>
  )
}

export default OrdersCard