import { View, Text, StatusBar, ScrollView, Pressable, Alert, TextInput } from 'react-native'
import React from 'react'
import { LanguageIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-100" style={{ paddingTop: hp(5) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <View
        className="flex-row justify-between items-center -mb-7 bg-gray-100 fixed z-30"
        style={{ padding: hp(2), borderBottomLeftRadius: hp(3), borderBottomRightRadius: hp(3) }}
      >
        <Text
          className="font-light text-gray-700"
          style={{ fontSize: hp(3) }}
        >
          <Text className="text-amber-500 font-bold">Nariño</Text> Fusión
        </Text>
        <Pressable
          className=""
          onPress={() => Alert.alert('[📌 Pendiente]')}
        >
          <LanguageIcon size={hp(4)} color="gray" />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="space-y-6 pt-7"
      >
        <View
          className="space-y-2"
          style={{ marginHorizontal: hp(2), marginTop: hp(2) }}
        >
          <Text
            className="text-gray-600 font-light"
            style={{ fontSize: hp(3.6), marginBottom: hp(-1.3) }}
          >
            Explora nuestra
          </Text>
          <Text
            className="text-gray-600 font-light"
            style={{ fontSize: hp(3.6) }}
          ><Text className="text-gray-600 font-semibold">gastronomía cultural</Text> aquí</Text>
        </View>

        <View
          className="flex-row items-center rounded-full bg-white"
          style={{ marginHorizontal: hp(2), padding: hp(0.7) }}
        >
          <TextInput
            className="flex-1 text-base tracking-wider"
            placeholder="Buscar platos"
            placeholderTextColor="#9ca3af"
            style={{ fontSize: hp(2.4), marginBottom: hp(0.3), paddingLeft: hp(3) }}
          />
          <Pressable
            className="bg-gray-100 rounded-full"
            onPress={() => Alert.alert('[📌Pendiente]')}
            style={{ padding: hp(2) }}
          >
            <MagnifyingGlassIcon size={hp(3.7)} strokeWidth={3} color="#4b5563" />
          </Pressable>
        </View>

        <View
          className="bg-white"
          style={{ borderTopLeftRadius: hp(7), borderTopRightRadius: hp(7) }}
        >
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
          <Text>si</Text>
        </View>
      </ScrollView>
    </View>
  )
}
