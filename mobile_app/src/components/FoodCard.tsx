import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import { HeartIcon } from 'react-native-heroicons/solid'
import { CubeIcon } from 'react-native-heroicons/outline'
import { COLORS, REGIONS } from '../constants'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { DishType } from '../types'

export interface FoodCardProps extends DishType {
  minified?: boolean;
  className?: string;
  onFavorite?: () => void;
  onMap?: () => void;
  onAR?: () => void;
}

const FoodCard: React.FC<FoodCardProps> = ({
  backgroundImg,
  regionId,
  name: dishName,
  description,
  isFavorite = false,
  minified = false,
  onFavorite = () => { Alert.alert('[📌 Pendiente: Favorito]') },
  onMap = () => { Alert.alert('[📌 Pendiente: Mapa]') },
  onAR = () => { Alert.alert('[📌 Pendiente: AR]') },
}) => {
  const region = REGIONS.find(({id})=> id === regionId)!
  return (
    <View
      className="relative rounded-2xl overflow-hidden shadow-lg bg-white justify-between items-center "
      style={{
        width: minified ? '100%' : 300,
        height: minified ? 'auto' : 370,
        padding: minified ? hp(0.7) : 0,
        flexDirection: minified ? 'row' : 'column',
      }}
    >
      {/* Background Image */}
      <Image
        className="inset-0"
        source={{ uri: backgroundImg }}
        resizeMode="cover"
        style={{
          width: minified ? 100 : '100%',
          borderRadius: minified ? hp(1.5) : 0,
          height: minified ? 100 : '100%',
          position: minified ? 'relative' : 'absolute',
        }}
      />

      {/* Map Thumbnail */}
      {!minified && (
        <TouchableOpacity
          className="absolute top-3 left-3 bg-white rounded-lg shadow-md"
          style={{ width: 60, height: 60 }}
          onPress={onMap}
        >
          <Image source={{ uri: 'https://raw.githubusercontent.com/gist/hepplerj/2f405df580f66923091ad604ccf2fffc/raw/bc7097cf7a072ce0cbd0c5350db33781529e4618/thumbnail.png' }} className="w-full h-full rounded-md" resizeMode="cover" />
        </TouchableOpacity>
      )}

      {/* Information Box */}
      <View
        className="bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md flex-row justify-between items-center"
        style={{
          position: minified ? 'static' : 'absolute',
          shadowColor: minified ? 'transparent' : 'black',
          margin: minified ? 0 : hp(1.5),
          marginRight: minified ? 0 : hp(3),
        }}
      >
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
        {!minified && (
          <TouchableOpacity className="bg-primary-600 -mr-8 aspect-square border border-primary-800/50 shadow-lg shadow-primary-700 rounded justify-center items-center px-4 ml-4" onPress={onAR}>
            <CubeIcon color="#f6ff52" size={30} />
            <Text className="text-[#f6ff52] font-bold">3D</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Favorite Button */}
      <TouchableOpacity className="absolute top-3 right-3 bg-slate-50 p-3 shadow-lg shadow-primary-800 rounded-full" onPress={onFavorite}>
        <HeartIcon
          size={minified ? 20 : 30 }
          color={COLORS[isFavorite ? 'secondary' : 'primary']}
          opacity={isFavorite ? 1 : 0.5}
        />
      </TouchableOpacity>
    </View>
  )
}

export default FoodCard
