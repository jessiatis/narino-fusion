import React from 'react'
import { ScrollView, StatusBar, Text, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function RegionsScreen() {
  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(2)}}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-10"
      >
        <Text className="text-primary-900 font-light text-3xl text-center mb-3 mt-5">
          Regiones
        </Text>
      </ScrollView>
    </View>
  )
}
