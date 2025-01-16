import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen'
import RegionsMap from '../components/RegionsMap'

export default function RegionsScreen() {
  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(2)}}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

        <Text className="text-primary-900 font-light text-3xl text-center mb-2 mt-16">
          Regiones
        </Text>

        <Text className="text-primary-900 font-light text-xl text-center mb-3 px-6">
          Selecciona una región para ver los platos típicos de la zona:
        </Text>

        <View className="flex-1 justify-start items-center py-10">
          <RegionsMap
            width={widthPercentageToDP(90)}
            height={heightPercentageToDP(50)}
          />
        </View>
    </View>
  )
}
