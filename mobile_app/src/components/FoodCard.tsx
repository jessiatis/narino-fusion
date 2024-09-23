import React from 'react'
import {Text, Pressable, Image, View, Alert } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Props {
  name: string
  image: any
}

export default function FoodCard({name, image}: Props) {
  return (
    <Pressable onPress={() => Alert.alert('[📌Pendiente]: ' + name)}>
      <View
        className="bg-gray-100 rounded-3xl relative shadow shadow-black"
        style={{ padding: hp(3), marginLeft: hp(3), marginTop: hp(3)}}
      >
        <View
          className="flex-row justify-center relative pointer-events-none"
          style={{ height: hp(17) }}
        >
          <Image
            source={image}
            style={{ height: hp(23), top: hp(-7) }}
            resizeMode="contain"
          />
        </View>
          <Text
            className="text-center font-bold text-gray-800"
            style={{ fontSize: hp(3.5) }}
          >
            {name}
          </Text>
      </View>
    </Pressable>
  )
}
