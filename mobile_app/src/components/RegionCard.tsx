import React from 'react'
import { View, Text, Image, Alert, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

interface Region {
  id: number;
  name: string;
  image: any;
  description?: string;
}

export default function RegionCard({ region }: { region: Region }) {
  return (
    <Pressable
      className="w-full flex-col relative -mt-20"
      style={{
        height: hp(30),
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
        source={region.image}
        style={{ width: '100%' }}
        resizeMode="cover"
      />
      <View className="bg-stone-900/40 absolute bottom-0 inset-x-0" style={{ padding: hp(2) }}>
        <Text
          className="font-bold text-white"
          style={{ fontSize: hp(2.7) }}
        >
          {region.name}
        </Text>
        <Text
          className="text-stone-300"
          style={{
            fontSize: hp(2.2),
            marginTop: hp(1),
          }}
        >
          {region.description || 'Descripción corta de la región, sus características o algún dato interesante.'}
        </Text>
      </View>
    </Pressable>
  )
}
