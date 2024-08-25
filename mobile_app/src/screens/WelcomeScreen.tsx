import { View, Text, StatusBar, Pressable } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl text-center text-white font-bold px-10">Pantalla de bienvenida</Text>
        <Text className="text-xl text-white text-center font-light py-4 px-6">Esta es una pantalla de bienvenida de pero solo para el ejemplo.</Text>
      </View>
      <View className="p-4">
        <Pressable className="bg-white px-8 py-4 rounded-full">
          <Text className="text-amber-500 text-xl font-semibold">Siguiente</Text>
        </Pressable>
      </View>
    </View>
  )
}
