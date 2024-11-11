import { View, Text, StatusBar, ScrollView, Pressable, Alert, TextInput } from 'react-native'
import React from 'react'
import { LanguageIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

import RegionCard from '../components/RegionCard'
import FoodCarousel from '../components/FoodCarousel'

export default function HomeScreen() {
  const navigation: any = useNavigation()

  const regions = [
    { id: 1,
       name: 'Andina',
       color: '#d97706',
       description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
       image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
    },
    { id: 2,
       name: 'Pacífica',
       color: '#2563eb',
       description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
       image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
    },
    { id: 3,
       name: 'Amazónica',
       color: '#16a34a',
       description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
       image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
    },
  ]

  const recommendedFood = [
    {
      id: 1,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      region: {name: 'Andina', color: '#c026d3'},
      dishName: 'Pan de Maíz',
      description: 'Vereda Tola de las Lajas',
      isFavorite: false,
    },
    {
      id: 2,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
      region: {name: 'Caribe', color: '#16a34a'},
      dishName: 'Arepa de Huevo',
      description: 'Costa Atlántica',
      isFavorite: true,
    },
    {
      id: 3,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      region: {name: 'Pacífica', color: '#d97706'},
      dishName: 'Sancocho de Pescado',
      description: 'Buenaventura',
      isFavorite: false,
    },
    {
      id: 4,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      region: {name: 'Amazónica', color: '#2563eb'},
      dishName: 'Pirarucú Asado',
      description: 'Leticia',
      isFavorite: true,
    },
    {
      id: 5,
      backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
      region: {name: 'Orinoquía', color: '#dc2626'},
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
        <View
          className="flex-row items-center rounded-full bg-gray-50 mb-8"
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

        {/* Regiones */}
        <View
          className="w-full pb-7 items-center bg-gray-50 px-3 mt-12"
          style={{
            borderTopLeftRadius: hp(7),
            borderTopRightRadius: hp(7),
            paddingVertical: hp(3),
          }}
        >
          <RegionCard region={regions[0]} />
        </View>

        {/* Recomendados */}
        <View className="bg-gray-50 pb-40">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-gray-600 text-2xl font-semibold">
              Recomendados
            </Text>
            <Pressable onPress={() => navigation.navigate('Welcome')}>
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
