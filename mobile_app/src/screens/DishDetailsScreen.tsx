import React, { useState } from 'react'
import { Text, View, Image, ScrollView, StatusBar, TouchableOpacity, Alert, Pressable } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { DishType } from '../types'
import { ArrowLeftIcon, CubeIcon } from 'react-native-heroicons/outline'
import { REGIONS } from '../constants/regions'
import { HeartIcon, MapPinIcon } from 'react-native-heroicons/solid'
import { COLORS } from '../constants/theme'
import { useFavorites } from '../context/FavoritesContext'

type Props = { route?: { params: { dish: DishType }}}

const DishDetailsScreen = ({ route }: Props) => {
  const { dish } = route!.params
  const navigation = useNavigation()
  const region = REGIONS.find(({id})=> id === dish.regionId)!
  const { verifyFavorite, toggleFavorite } = useFavorites()
  
  const [isFavorite, setIsFavorite] = useState(verifyFavorite(dish.id));

  const onFavorite = async () => {
    setIsFavorite(prev => !prev)
    await toggleFavorite(dish.id)
  }
  const onImage = (uri: string) => Alert.alert(`[🚩 Pendiente]: Imagen (${uri})`)
  const onMap = () => Alert.alert('[🚩 Pendiente]: MAP')
  const onAR = () => Alert.alert('[🚩 Pendiente]: AR')

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Imagen de fondo */}
      <View className="w-full absolute inset-0">
        <Image
          className="w-full"
          resizeMode="cover"
          source={{ uri: dish.backgroundImg }}
          style={{height: hp(40)}}
        />
      </View>

      <View className="w-full h-screen absolute inset-0 bg-black/60" />

      <ScrollView contentContainerStyle={{ minHeight: hp(100), paddingTop: hp(6) }}>
        <View className="flex-row justify-between" style={{ marginBottom: hp(16), marginHorizontal: hp(1) }}>
          {/* Botón de ir atrás */}
          <TouchableOpacity
            className="w-auto self-start p-3 bg-primary-600/80 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={24} strokeWidth={1.8} color={COLORS.accent} />
          </TouchableOpacity>

          {/* Botón favorito */}
          <TouchableOpacity 
            className="w-auto self-end bg-white shadow-lg shadow-primary-800 p-3 rounded-full" 
            onPress={onFavorite}
          >
            <Text className="aspect-square text-center">
              <HeartIcon
                size={30}
                color={COLORS[isFavorite ? 'secondary' : 'primary']}
                opacity={isFavorite ? 1 : 0.5}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View className="h-full bg-slate-100 pt-7" style={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}>
          <View className="absolute -top-7 right-7 flex-row gap-1">
            {/* Botón Mapa */}
            <TouchableOpacity className="h-auto bg-primary-600 p-3 rounded-full flex-row items-center" onPress={onMap}>
              <MapPinIcon color={COLORS.accent} size={30} />
            </TouchableOpacity>

            {/* Botón AR */}
            <TouchableOpacity className="h-auto bg-primary-600 shadow-lg shadow-primary-800 p-3 rounded-full flex-row items-center" onPress={onAR}>
              <CubeIcon color={COLORS.accent} size={30} />
              <Text className="font-bold text-xl text-primary-100 ml-1">3D</Text>
            </TouchableOpacity>
          </View>

          {/* Título y región */}
          <View className="px-4">
            <Text className="text-3xl font-medium mb-2 text-slate-700">{dish.name}</Text>
            <View className="flex-row items-center gap-1.5 mb-4">
              <View className="w-2 h-2 rounded-full aspect-square" style={{backgroundColor: region.color}} />
              <Text className="uppercase text-sm tracking-widest font-semibold opacity-90" style={{color: region.color}}>
                Región {region.name}
              </Text>
            </View>
          </View>

          {/* Fotografías */}
          <View className="w-full h-40 mb-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dish.photographs.map((photo, index) => (
                <Pressable key={index} className={'h-full ml-3 ' + (index === dish.photographs.length - 1 && 'mr-3')} onPress={() => onImage(photo)}>
                  <Image
                    className="w-60 h-40 rounded-lg"
                    source={{ uri: photo }}
                    resizeMode="cover"
                  />
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Detalles e ingredientes */}
          <View className="mb-6 px-4">
            <Text className="text-base text-slate-500 mb-5">{dish.description}</Text>
            <Text className="text-xl font-medium text-slate-700 mb-2">Ingredientes</Text>
            <View className="flex-row flex-wrap gap-1.5">
              {dish.ingredients.map(ingredient => (
                <View key={ingredient} className="bg-slate-200 border border-slate-300/80 px-4 py-2 rounded-full">
                  <Text className="text-sm text-slate-700">
                    {ingredient}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* CTA mapa */}
          <View className="w-full px-4 mb-6">
            <Text className="text-xl font-medium text-slate-700 mb-2">Sabores con origen</Text>
            <View className="flex-row items-center">
              <Pressable className="w-14 aspect-square border-4 rounded-lg border-white mr-4" onPress={onMap}>
                <Image
                  className="rounded-md aspect-square"
                  resizeMode="cover"
                  source={{ uri: 'https://raw.githubusercontent.com/gist/hepplerj/2f405df580f66923091ad604ccf2fffc/raw/bc7097cf7a072ce0cbd0c5350db33781529e4618/thumbnail.png' }}
                />
              </Pressable>
              <Text className="flex-grow text-slate-500 text-lg leading-5">Descubre las regiones donde puedes deleitarte con este exquisito plato.</Text>
            </View>
          </View>

          {/* Botón AR */}
          <View className="w-full px-4 mb-4">
            <TouchableOpacity className="bg-primary-600 shadow-lg shadow-primary-600 p-4 rounded-xl flex-row justify-between items-center overflow-hidden" onPress={onAR}>
              <View>
                <Text className="flex-grow text-white font-bold text-2xl">¡Servir plato en</Text>
                <Text className="flex-grow text-white font-medium text-xl">Realidad Aumentada!</Text>
              </View>
              <View className="-m-16 -mr-7">
                <CubeIcon color={COLORS.accent} size={120} />
              </View>
              <View className="-m-16 -mr-7 absolute right-9">
                <CubeIcon color={COLORS.accent} size={80} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default DishDetailsScreen
