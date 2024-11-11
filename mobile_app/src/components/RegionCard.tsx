import React from 'react'
import { View, Text, Image, Alert, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Region {
  id: number;
  name: string;
  image: any;
  description: string;
  color: string;
}

export default function RegionCard({ region }: { region: Region }) {
  return (
    <Pressable
      className="w-full flex-col relative -mt-20"
      style={{
        height: hp(40),
        backgroundColor: 'white',
        borderRadius: hp(2),
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}
      onPress={() => {
        console.log(region.name)
        Alert.alert(`Seleccionaste la ${region.name}`)
      }}
    >
      <Image
        className="flex-1"
        source={{ uri: region.image }}
        style={{ width: '100%' }}
        resizeMode="cover"
      />
      <View className="bg-primary-900/70 absolute bottom-0 inset-x-0" style={{ padding: hp(2) }}>
        <View className="flex-row items-center gap-2 mb-1">
          <View className="w-2.5 h-2.5 rounded-full aspect-square" style={{backgroundColor: region.color}} />
          <Text
            className="font-bold text-white"
            style={{ fontSize: hp(2.7) }}
          >
            Región {region.name}
          </Text>
        </View>
        <Text
          className="text-primary-100 font-light"
          style={{
            fontSize: hp(2),
            marginTop: hp(0.5),
          }}
        >
          {region.description}
        </Text>
      </View>
    </Pressable>
  )
}
