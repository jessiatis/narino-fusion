import React from 'react'
import { View, Text, StatusBar, Pressable, ImageBackground, Image } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function WelcomeScreen({navigation}: any) {
  return (
    <View className="flex-1 justify-center items-center">
      {/* Imagen de fondo */}
      <ImageBackground
        className="w-full h-full flex-1 absolute top-0 left-0"
        source={require('../assets/food/food3.png')}
      />

      {/* Overlay */}
      <LinearGradient
        className="w-full h-full flex-1 absolute top-0 left-0"
        colors={['rgba(17,17,9,0.2)', 'rgba(17,17,9,0.8)', 'rgba(17,17,9,1)']}
        style={{ width: wp(100), height: hp(120) }}
      />

      {/* Status bar */}
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Bienvenida y logo */}
      <View className="flex-1 justify-center items-center px-6">
        <Text className="w-80 text-center text-white font-bold uppercase" style={{fontSize: hp(2.6), marginTop: hp(10), letterSpacing: 5}}>
          Bienvenidos a
        </Text>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://narinofusion.co/wp-content/uploads/2024/09/Vertical-negativo.png' }}
          style={{ width: wp(100), height: hp(30), marginBottom: hp(7) }}
        />
        <Text className="w-80 text-center text-white font-light" style={{fontSize: hp(2.9), lineHeight: hp(4)}}>
          Descubre los sabores auténticos de nuestras regiones, donde cada plato cuenta una historia.
        </Text>
      </View>


      {/* Botón de continuar */}
      <View className="w-full justify-between items-center flex-row p-6">
        <Text className="text-white text-center font-extralight" style={{fontSize: hp(2.7)}}>
          ¡Esperamos que lo disfrutes!
        </Text>
        <Pressable
          className="bg-white rounded-lg active:scale-95 p-3"
          onPress={() => navigation.navigate('MainTabs')}
          style={{
            paddingHorizontal: hp(4),
            paddingVertical: hp(2),
          }}
        >
          <ArrowRightIcon color="black" size={32} />
        </Pressable>
      </View>
    </View>
  )
}
