import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'

export default function DishesScreen() {
  const filteredDishes = DISHES
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
          {filteredDishes.map((dish)=>(
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
