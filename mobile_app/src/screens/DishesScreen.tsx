import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'

export default function DishesScreen() {
  const dishes = [
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
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(5)}}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-10"
      >
        <Text className="text-primary-800 font-light text-3xl text-center mb-3">
          Lista de platos
        </Text>

        {/* Campo de búsqueda */}
        <InputSearch />

        {/* Lista de platos */}
        <View className="gap-y-2 p-3">
          {dishes.map((dish)=>(
            <View key={dish.id}>
              <FoodCard minified {...dish} />
            </View>
          ))}
        </View>

        <View className="pb-28 pt-5">
          <Text className="text-center text-slate-500">
            ¡Has llegado al final!
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
