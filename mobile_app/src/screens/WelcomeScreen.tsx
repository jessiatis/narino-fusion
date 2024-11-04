import React from 'react'
import { View, Text, StatusBar, Pressable } from 'react-native'
import { heightPercentageToDP as hp  } from 'react-native-responsive-screen'

export default function WelcomeScreen({navigation}: any) {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500" style={{padding: hp(3)}}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-white font-bold" style={{fontSize: hp(4), marginBottom: hp(0.7)}}>
          Pantalla de bienvenida
        </Text>
        <Text className="text-white text-center font-light" style={{fontSize: hp(2.5)}}>
          Esta es una pantalla de bienvenida de pero solo para el ejemplo.
        </Text>
      </View>
      <View>
        <Pressable
          className="bg-white rounded-full active:scale-95"
          onPress={() => navigation.navigate('MainTabs')}
          style={{
            paddingHorizontal: hp(4),
            paddingVertical: hp(2),
          }}
        >
          <Text className="text-amber-500 font-semibold" style={{fontSize: hp(2.5)}}>
            Siguiente
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
