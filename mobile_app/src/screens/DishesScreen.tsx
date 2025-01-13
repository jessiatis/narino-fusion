import { View, Text, StatusBar, ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import FoodCard from '../components/FoodCard'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'
import { REGIONS } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { InboxIcon } from 'react-native-heroicons/outline'

// Filtros de categoría
const CATEGORY_FILTERS = [
  'Todo',
  'Favoritos',
  ...REGIONS.map(({ name }) => `Región ${name}`),
  'No-Favoritos',
]

// Normalización de texto para búsqueda
const normalizeText = (text: string) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function DishesScreen() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const scrollRef = useRef<ScrollView>(null)

  const navigation: any = useNavigation()
  const currentRoute = navigation.getState().index
  const params = navigation?.getState()?.routes[currentRoute]?.params
  
  // Inicializar el estado con los parámetros
  useEffect(()=>{
    if (params?.dishName) {
      setSearchText(params.dishName)
      setSelectedCategory(null)
      navigation.setParams({ dishName: null })
    }
    if (params?.regionId) {
      const region = REGIONS.find((region) => region.id === params.regionId)
      if (region) {
        setSelectedCategory(`Región ${region.name}`)
      }
      navigation.setParams({ regionId: null })
    }
  }, [params])

  // Scroll automático al entrar
  const index = CATEGORY_FILTERS.indexOf(selectedCategory ?? 'Todo')
  if (index >= 0 && scrollRef.current) {
    scrollRef.current.scrollTo({
      x: index * 70,
      animated: true,
    })
  }

  // Filtrar los platos
  const filteredDishes = [...DISHES].filter((dish) => {
    const matchesSearchText = normalizeText(dish.name).includes(normalizeText(searchText))
    const matchesCategory =
      selectedCategory === 'Todo' ||
      selectedCategory === null ||
      (selectedCategory === 'Favoritos' && dish.isFavorite) ||
      (selectedCategory === 'No-Favoritos' && !dish.isFavorite) ||
      (selectedCategory === `Región ${REGIONS.find(({id}) => id === dish.regionId)?.name ?? ''}`)

    return matchesSearchText && matchesCategory
  })

  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(2) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        <Text className="text-primary-900 font-light text-3xl text-center mb-3 mt-5">
          Lista de platos
        </Text>

        {/* Campo de búsqueda */}
        <InputSearch value={searchText} onChangeText={setSearchText} />

        {/* Filtros horizontales */}
        <ScrollView 
          ref={scrollRef} 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          className="mt-5 mb-2 px-3"
        >
          {CATEGORY_FILTERS.map((label, index) => (
            <Pressable
              key={label}
              className="rounded-full px-4 py-2 mr-1"
              onPress={() => setSelectedCategory(label)}
              style={{ 
                backgroundColor: label === selectedCategory || (index === 0 && selectedCategory === null)
                  ? 'rgba(96,99,26,0.7)' 
                  : 'transparent'
              }}
            >
              <Text
                className="text-slate-700"
                style={{ 
                  color: label === selectedCategory || (index === 0 && selectedCategory === null)  
                    ? '#f6ff52' 
                    : '#334155' 
                }}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Lista de platos */}
        <View className="gap-y-2 p-3">
          {filteredDishes.map((dish) => (
            <TouchableOpacity
              key={dish.id}
              onPress={() => navigation.navigate('DishDetails', { dish })}
            >
              <FoodCard minified {...dish} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Mensaje de resultados */}
        <View className="pb-28 pt-5 items-center">
          {!filteredDishes.length && (
            <InboxIcon color="#64748b" opacity={0.7} size={70} strokeWidth={1} />
          )}
          <Text className="text-center text-slate-500 text-lg">
            {filteredDishes.length ? '¡Has llegado al final!' : 'Receta no encontrada.'}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
