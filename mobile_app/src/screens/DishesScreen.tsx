import { View, Text, StatusBar, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'
import { REGIONS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { DishType } from '../types'
import { InboxIcon } from 'react-native-heroicons/outline'

const CATEGORY_FILTERS = [
  'Todo',
  'Favoritos',
  ...REGIONS.map(({name}) => `Región ${name}`),
  'No-Favoritos',
]

const INITIAL_FILTERS = {
  category: 'Todo',
  searchText: ''
}

export default function DishesScreen() {
  const [filteredDishes, setFilteredDishes] = useState<DishType[]>([])
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  
  const navigation: any = useNavigation()
  const currentRoute = navigation.getState().index
  const params = navigation?.getState()?.routes[currentRoute]?.params

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.setParams({ regionId: null, dishName: null })
      setFilters(INITIAL_FILTERS)
    })
    return unsubscribe
  }, [navigation])

  // Aplicar filtros
  useEffect(() => {
    let filtered = DISHES 
    
    // Filtrar por nombre (Parámetro)
    if (params?.dishName) {
      console.log({dishName: params.dishName});
      filtered = filtered.filter(dish => dish.name === params.dishName)
    }

    // Filtrar por región (Parámetro)
    if (params?.regionId) {
      console.log({regionId: params.regionId});
      filtered = filtered.filter(dish => dish.regionId === params.regionId)
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
  }, [filters, params])

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

        <View className="pb-28 pt-5 items-center">
          {!filteredDishes.length && <InboxIcon color='#64748b' opacity={0.7} size={70} strokeWidth={1} />}
          <Text className="text-center text-slate-500 text-lg">
            {filteredDishes.length ? '¡Has llegado al final!' : 'Receta no encontrada.' }
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
