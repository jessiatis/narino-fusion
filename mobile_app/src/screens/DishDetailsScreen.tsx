import React from 'react'
import { Text, Image, ScrollView, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { DishType } from '../types'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'

type Props = { route?: { params: { dish: DishType }}}

const DishDetailsScreen = ({ route }: Props) => {
  const { dish } = route!.params
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{paddingTop: hp(6)}}>
      <Pressable className="w-auto self-start p-2" onPress={() => navigation.goBack()}>
        <ArrowLeftIcon size={26} color="black" />
      </Pressable>
      <Image
        className="w-full h-60 mb-6"
        resizeMode="cover"
        source={{ uri: dish.backgroundImg }}
      />
      <Text className="text-3xl">{dish.dishName}</Text>
      <Text>{dish.description}</Text>
    </ScrollView>
  )
}

export default DishDetailsScreen
