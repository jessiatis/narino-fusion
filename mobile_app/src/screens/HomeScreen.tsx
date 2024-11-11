import { View, Text, StatusBar, ScrollView, Pressable, Alert } from 'react-native'
import React from 'react'
import { LanguageIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

import RegionCard from '../components/RegionCard'
import FoodCarousel from '../components/FoodCarousel'
import { REGIONS } from '../constants'
import InputSearch from '../components/InputSearch'

export default function HomeScreen() {
  const navigation: any = useNavigation()
  const recommendedFood = [
    {
      id: 1,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      regionId: 1,
      dishName: 'Pan de Maíz',
      description: 'Vereda Tola de las Lajas',
      isFavorite: false,
    },
    {
      id: 2,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
      regionId: 2,
      dishName: 'Arepa de Huevo',
      description: 'Costa Atlántica',
      isFavorite: true,
    },
    {
      id: 3,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      regionId: 3,
      dishName: 'Sancocho de Pescado',
      description: 'Buenaventura',
      isFavorite: false,
    },
    {
      id: 4,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      regionId: 3,
      dishName: 'Pirarucú Asado',
      description: 'Leticia',
      isFavorite: true,
    },
    {
      id: 5,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
      regionId: 1,
      dishName: 'Mamona',
      description: 'Villavicencio',
      isFavorite: false,
    },
  ]

  return (
    <View className="flex-1 bg-primary-800" style={{ paddingTop: hp(5) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Header */}
      <View
        className="flex-row justify-between items-center -mb-7 bg-primary-800 fixed z-30"
        style={{ padding: hp(2), borderBottomLeftRadius: hp(3), borderBottomRightRadius: hp(3) }}
      >
        <Text
          className="font-light text-zinc-200 tracking-wider"
          style={{ fontSize: hp(3) }}
        >
          <Text className="text-primary-400 font-bold uppercase">Nariño</Text> Fusión
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
            className="text-primary-100 font-light"
            style={{ fontSize: hp(3.6), marginBottom: hp(-1.3) }}
          >
            Explora nuestra
          </Text>
          <Text
            className="text-primary-100 font-light"
            style={{ fontSize: hp(3.6) }}
          ><Text className="text-primary-50 font-semibold">gastronomía cultural</Text> aquí</Text>
        </View>

        {/* Campo de búsqueda */}
        <View className="mb-8">
          <InputSearch />
        </View>

        {/* Regiones */}
        <View
          className="w-full pb-7 items-center bg-gray-50 px-3 mt-12"
          style={{
            borderTopLeftRadius: hp(7),
            borderTopRightRadius: hp(7),
            paddingVertical: hp(3),
          }}
        >
          <RegionCard region={REGIONS[0]} />
        </View>

        {/* Recomendados */}
        <View className="bg-gray-50 pb-32">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-gray-600 text-2xl font-semibold">
              Recomendados
            </Text>
            <Pressable onPress={() => navigation.navigate('Dishes')}>
              <Text className="text-primary-600">Ver todos</Text>
            </Pressable>
          </View>

          {/* FoodCarousel */}
          <FoodCarousel data={recommendedFood} />
        </View>
      </ScrollView>
    </View>
  )
}
