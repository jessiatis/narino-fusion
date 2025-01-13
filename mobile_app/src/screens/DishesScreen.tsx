import { View, Text, StatusBar, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'
import { REGIONS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { DishType } from '../types'

const CATEGORY_FILTERS = [
  'Todo',
  'Favoritos',
  ...REGIONS.map(({name}) => `Región ${name}`),
  'No-Favoritos',
]

export default function DishesScreen() {
  const [filteredDishes, setFilteredDishes] = useState<DishType[]>([])
  
  const navigation: any = useNavigation()
  const currentRoute = navigation.getState().index
  const params = navigation?.getState()?.routes[currentRoute]?.params

  const [filters, setFilters] = useState({
    category: 'Todo',
    regionId: params?.region ?? null,
    searchText: params?.dishName ?? ''
  })
  
  // Eliminar los parámetros
  useEffect(() => {
    if (params?.region) {
      setFilters(prev => ({...prev, regionId: params.region}))
    }
    if (params?.dishName) {
      setFilters(prev => ({...prev, searchText: params.dishName}))
    }
  }, [params])

  // Aplicar filtros
  useEffect(() => {
    let filtered = DISHES 

    // Filtrar por región
    if (filters.regionId) {
      filtered = filtered.filter(dish => dish.regionId === filters.regionId)
    }

    // Filtrar por texto de búsqueda
    if (filters.searchText) {
      const searchNormalized = filters.searchText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      filtered = filtered.filter(dish => 
        dish.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(searchNormalized)
      )
    }

    // Filtrar por categoría
    if (filters.category !== 'Todo') {
      if (filters.category === 'Favoritos') {
        filtered = filtered.filter(dish => dish.isFavorite)
      } else if (filters.category === 'No-Favoritos') {
        filtered = filtered.filter(dish => !dish.isFavorite)
      } else {
        const regionName = filters.category.replace('Región ', '')
        filtered = filtered.filter(dish => {
          const region = REGIONS.find(r => r.id === dish.regionId)
          return region?.name === regionName
        })
      }
    }
    setFilteredDishes(filtered)
  }, [filters])

  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(2)}}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-10"
      >
        <Text className="text-primary-900 font-light text-3xl text-center mb-3 mt-5">
          Lista de platos
        </Text>

        {/* Campo de búsqueda */}
        <InputSearch 
          value={filters.searchText} 
          onChangeText={(text) => setFilters((prev)=>({...prev, searchText: text}))} 
        />

        {/* Filtros horizontales */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5 mb-2 px-3">
          {CATEGORY_FILTERS.map((label) => (
            <Pressable
              key={label}
              className="rounded-full px-4 py-2 mr-1"
              onPress={() => setFilters((prev) => ({...prev, category: label}))}
              style={{
                backgroundColor: label === filters.category ? 'rgba(96,99,26,0.7)' : 'transparent',
              }}
            >
              <Text className="text-slate-700" style={{color: label === filters.category ? '#f6ff52' : '#334155'}}>{label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Lista de platos */}
        <View className="gap-y-2 p-3">
          {filteredDishes.map((dish)=>(
            <TouchableOpacity key={dish.id} onPress={() => navigation.navigate('DishDetails', { dish })}>
              <FoodCard minified {...dish} />
            </TouchableOpacity>
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
