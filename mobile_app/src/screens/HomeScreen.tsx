import { View, Text, StatusBar, ScrollView, Pressable, Alert, Image } from 'react-native'
import React from 'react'
import { LanguageIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import RegionCard from '../components/RegionCard'
import FoodCarousel from '../components/FoodCarousel'
import { COLORS, REGIONS } from '../constants'
import InputSearch from '../components/InputSearch'
import { DISHES } from '../mocks/dishes'

export default function HomeScreen() {
  const navigation: any = useNavigation()
  const recommendedFood = DISHES

  return (
    <View className="flex-1 bg-primary-800" style={{ paddingTop: hp(4) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Header */}
      <View
        className="flex-row justify-between items-start -mb-7 bg-primary-800 fixed z-30"
        style={{ padding: hp(2), borderBottomLeftRadius: hp(3), borderBottomRightRadius: hp(3) }}
      >
        <Image
          className="w-24 h-24 -mt-4 -mb-12"
          resizeMode="contain"
          alt="Logo SENA"
          source={{uri: 'https://narinofusion.co/wp-content/uploads/2024/09/Vertical-negativo.png'}}
        />
        <Pressable
          onPress={() => Alert.alert('[📌 Pendiente]')}
        >
          <LanguageIcon size={hp(4)} color={COLORS.accent} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="pt-16"
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
        <View className="mb-8">
          <InputSearch />
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
          <RegionCard region={REGIONS[0]} />
        </View>

        {/* Recomendados */}
        <View className="bg-gray-50 pb-44 -mt-1">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-gray-600 text-2xl font-semibold">
              Recomendados
            </Text>
            <Pressable onPress={() => navigation.navigate('Dishes')}>
              <Text className="text-primary-600">Ver todos</Text>
            </Pressable>
          </View>

          {/* FoodCarousel */}
          <FoodCarousel dishes={recommendedFood} />
        </View>
      </ScrollView>
    </View>
  )
}
