import { View, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

export default function InputSearch() {
  return (
    <View
      className="flex-row items-center rounded-full bg-gray-50"
      style={{ marginHorizontal: hp(2), padding: hp(0.7) }}
    >
      <TextInput
        className="flex-1 text-base tracking-wider"
        placeholder={'Buscar plato (Ej: Pan de Maíz)'}
        placeholderTextColor="#9ca3af"
        style={{ fontSize: hp(2.4), marginBottom: hp(0.3), paddingLeft: hp(3) }}
      />
      <Pressable
        className="bg-zinc-500/20 rounded-full"
        onPress={() => Alert.alert('[📌Pendiente]')}
        style={{ padding: hp(2) }}
      >
        <MagnifyingGlassIcon size={hp(3.6)} strokeWidth={2.3} color="#555b25" />
      </Pressable>
    </View>
  )
}