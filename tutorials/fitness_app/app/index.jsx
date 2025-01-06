import { View, Text } from 'react-native'
import React from 'react'
import "../global.css";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>index</Text>
    </View>
  )
}