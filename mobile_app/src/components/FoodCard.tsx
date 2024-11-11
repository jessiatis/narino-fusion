import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import { CubeIcon, HeartIcon as HeartOutlineIcon } from 'react-native-heroicons/outline'
import { REGIONS } from '../constants'

export interface FoodCardProps {
  id: number;
  backgroundImg: string;
  regionId: number;
  dishName: string;
  description: string;
  isFavorite: boolean;
  onFavoritePress?: () => void;
  onMapPress?: () => void;
  onArPress?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  backgroundImg,
  regionId,
  dishName,
  description,
  isFavorite = false,
  onFavoritePress = () => { Alert.alert('[📌 Pendiente: Favorito]') },
  onMapPress = () => { Alert.alert('[📌 Pendiente: Mapa]') },
  onArPress = () => { Alert.alert('[📌 Pendiente: AR]') },
}) => {
  const region = REGIONS.find(({id})=> id === regionId)!
  return (
    <View className="relative rounded-2xl overflow-hidden shadow-lg mr-5" style={{ width: 300, height: 370 }}>
      {/* Background Image */}
      <Image source={{ uri: backgroundImg }} className="absolute inset-0 w-full h-full" resizeMode="cover" />

      {/* Map Thumbnail */}
      <TouchableOpacity className="absolute top-3 left-3 bg-white rounded-lg shadow-md" style={{ width: 60, height: 60 }} onPress={onMapPress}>
        <Image source={{ uri: 'https://raw.githubusercontent.com/gist/hepplerj/2f405df580f66923091ad604ccf2fffc/raw/bc7097cf7a072ce0cbd0c5350db33781529e4618/thumbnail.png' }} className="w-full h-full rounded-md" resizeMode="cover" />
      </TouchableOpacity>

      {/* Information Box */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-4 m-3 mr-6 rounded-lg shadow-md flex-row justify-between items-center">
        <View style={{ flex: 1 }}>
          <View className="flex-row items-center gap-1.5 mb-1">
            <View className="w-1.5 h-1.5 rounded-full aspect-square" style={{backgroundColor: region.color}} />
            <Text className="uppercase text-xs tracking-widest font-semibold opacity-90" style={{color: region.color}}>
              Región {region.name}
            </Text>
          </View>
          <Text className="text-lg font-bold text-primary-900/80" numberOfLines={1} ellipsizeMode="tail">
            {dishName}
          </Text>
          <Text className="text-sm text-primary-900/70 -mt-0.5" numberOfLines={1} ellipsizeMode="tail">
            {description}
          </Text>
        </View>

        {/* AR Button */}
        <TouchableOpacity className="bg-primary-600 -mr-8 aspect-square border border-primary-800/50 shadow-lg shadow-primary-700 rounded justify-center items-center px-4 ml-4" onPress={onArPress}>
          <CubeIcon color="#f6ff52" size={30} />
          <Text className="text-[#f6ff52] font-bold">3D</Text>
        </TouchableOpacity>
      </View>

      {/* Favorite Button */}
      <TouchableOpacity className="absolute top-3 right-3 bg-primary-700/70 p-3 rounded-full" onPress={onFavoritePress}>
        <Text className="aspect-square text-center">
          {
            isFavorite
            ? (<HeartIcon color="#f6ff52" size={30} />)
            : (<HeartOutlineIcon color="#f6ff52" size={30} />)
          }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FoodCard
