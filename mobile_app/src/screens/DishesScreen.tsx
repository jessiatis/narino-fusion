import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'
import { REGIONS } from '../constants'

export default function DishesScreen() {
  const filteredDishes = DISHES
  const regions = REGIONS.map(({name}) => ({label: `Región ${name}`, actived: false}))
  const horizontalFilters = [
    {label: 'Todo', actived: true },
    {label: 'Favoritos', actived: false },
    ...regions,
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

        {/* Filtros horizontales */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5 mb-2 px-3">
          {horizontalFilters.map(({label, actived}) => (
            <TouchableOpacity
              key={label}
              className="rounded-full px-4 py-2 mr-1"
              style={{
                backgroundColor: actived ? 'rgb(96 99 26 / 0.7)' : 'transparent',
              }}
            >
              <Text style={{color: actived ? '#f6ff52' : ''}}>{label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
