import { View, Text, StatusBar, ScrollView, Pressable, Alert, TextInput, Dimensions } from 'react-native'
import React from 'react'
import { LanguageIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Carousel from 'react-native-reanimated-carousel'
import FoodCard from '../components/FoodCard'
import RegionCard from '../components/RegionCard'

const width = Dimensions.get('window').width

export default function HomeScreen() {
  const regions = [
    { id: 1, name: 'Región 1', image: require('../assets/regions/placeholder.png') },
    { id: 2, name: 'Región 2', image: require('../assets/regions/placeholder.png') },
    { id: 3, name: 'Región 3', image: require('../assets/regions/placeholder.png') },
  ]

  const recommendedFood = [
    {id: 1, name: 'Comida 1', image: require('../assets/food/example-1.png')},
    {id: 2, name: 'Comida 2', image: require('../assets/food/example-2.png')},
    {id: 3, name: 'Comida 3', image: require('../assets/food/example-3.png')},
    {id: 4, name: 'Comida 4', image: require('../assets/food/example-4.png')},
    {id: 5, name: 'Comida 5', image: require('../assets/food/example-5.png')},
  ]

  return (
    <View className="flex-1 bg-primary-900" style={{ paddingTop: hp(5) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Header */}
      <View
        className="flex-row justify-between items-center -mb-7 bg-primary-900 fixed z-30"
        style={{ padding: hp(2), borderBottomLeftRadius: hp(3), borderBottomRightRadius: hp(3) }}
      >
        <Text
          className="font-light text-zinc-200"
          style={{ fontSize: hp(3) }}
        >
          <Text className="text-primary-400 font-bold">Nariño</Text> Fusión
        </Text>
        <Pressable
          onPress={() => Alert.alert('[📌 Pendiente]')}
        >
          <LanguageIcon size={hp(4)} color="#a9bd5f"/>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-10"
      >
        {/* Título */}
        <View
          className="space-y-2 mb-5"
          style={{ marginHorizontal: hp(2), marginTop: hp(2) }}
        >
          <Text
            className="text-zinc-300 font-light"
            style={{ fontSize: hp(3.6), marginBottom: hp(-1.3) }}
          >
            Explora nuestra
          </Text>
          <Text
            className="text-zinc-300 font-light"
            style={{ fontSize: hp(3.6) }}
          ><Text className="text-secondary-400 font-semibold">gastronomía cultural</Text> aquí</Text>
        </View>

        {/* Campo de búsqueda */}
        <View
          className="flex-row items-center rounded-full bg-gray-200 border-gray-700 border mb-8"
          style={{ marginHorizontal: hp(2), padding: hp(0.7) }}
        >
          <TextInput
            className="flex-1 text-base tracking-wider"
            placeholder={`Buscar plato (Ej: ${recommendedFood[4].name})`}
            placeholderTextColor="#9ca3af"
            style={{ fontSize: hp(2.4), marginBottom: hp(0.3), paddingLeft: hp(3) }}
          />
          <Pressable
            className="bg-primary-600/20 rounded-full"
            onPress={() => Alert.alert('[📌Pendiente]')}
            style={{ padding: hp(2) }}
          >
            <MagnifyingGlassIcon size={hp(3.6)} strokeWidth={2.3} color="#555b25" />
          </Pressable>
        </View>

        {/* Regiones */}
        <View
          className="w-full bg-white shadow-md pb-10 items-center px-3 mt-12"
          style={{
            borderTopLeftRadius: hp(7),
            borderTopRightRadius: hp(7),
            paddingVertical: hp(3),
          }}
        >
          <RegionCard region={regions[0]} />
        </View>

        {/* Recomendados */}
        <View className="bg-white">
          <Text
            className="text-gray-600 font-semibold"
            style={{
              fontSize: hp(3),
              marginBottom: hp(2),
              paddingHorizontal: hp(3),
            }}
          >
            Recomendados
          </Text>
          <Carousel
            width={width * 0.7}
            height={hp(40)}
            data={recommendedFood}
            renderItem={({item}) => <FoodCard {...item} />}
            style={{ flex: 1, overflow: 'visible' }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
