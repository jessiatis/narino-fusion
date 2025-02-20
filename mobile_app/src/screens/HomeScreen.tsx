import { View, Text, StatusBar, ScrollView, Pressable, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LanguageIcon } from 'react-native-heroicons/outline'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import RegionCard from '../components/RegionCard'
import FoodCarousel from '../components/FoodCarousel'
import { REGIONS } from '../constants/regions'
import InputSearch from '../components/InputSearch'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS } from '../constants/theme'
import { useTranslation } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('')
  const [indexRegion, setIndexRegion] = useState(Math.floor(Math.random() * REGIONS.length))

  const navigation: any = useNavigation()
  const { t, i18n } = useTranslation();
  
  const changeLanguage = async (lng: string) => {
    try {
      i18n.changeLanguage(lng);
      await AsyncStorage.setItem('language', lng);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexRegion((prevIndex) => (prevIndex + 1) % REGIONS.length);
    }, 10000);

    return () => clearInterval(interval);
  },[])
  
  const recommendedFood:any = t('dishes.recipes', { returnObjects: true });

  return (
    <LinearGradient 
      colors={['rgb(43, 45, 10)', 'rgb(133, 141, 12)']}
      locations={[0.1, 0.9]}
      className="flex-1 bg-primary-800"
      style={{ paddingTop: hp(5) }}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Header */}
      <View
        className="flex-row justify-between items-start -mb-5 bg-primary-800 fixed z-30"
        style={{ padding: hp(2), borderBottomLeftRadius: hp(3), borderBottomRightRadius: hp(3) }}
      >
        <Image
          className="w-24 h-24 -mt-4 -mb-12"
          resizeMode="contain"
          alt="Logo SENA"
          source={{uri: 'https://narinofusion.co/wp-content/uploads/2024/09/Vertical-negativo.png'}}
        />
        <TouchableOpacity
          className='flex-row items-center gap-2'
          onPress={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
        >
          <LanguageIcon size={hp(4)} color={COLORS.accent} /> 
          <Text className='text-white font-semibold' style={{fontSize: hp(2)}}>{i18n.language === 'es' ? 'EN' : 'ES'}</Text>
        </TouchableOpacity>
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
            {t('home.title.0')}
          </Text>
          <Text
            className="text-primary-100 font-light"
            style={{ fontSize: hp(3.6) }}
          ><Text className="text-primary-50 font-semibold">{t('home.title.1')}</Text> {t('home.title.2')}</Text>
        </View>

        {/* Campo de búsqueda */}
        <View className="mb-8">
          <InputSearch 
            value={searchText} 
            onChangeText={setSearchText} 
            onSearch={() => navigation.navigate('Dishes', { dishName: searchText })}
          />
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
          <RegionCard region={REGIONS[indexRegion]} />
        </View>

        {/* Recomendados */}
        <View className="bg-gray-50 pb-44 -mt-1">
          <View className="flex-row justify-between items-center px-4 mb-3">
            <Text className="text-gray-600 text-2xl font-semibold">
              {t('home.recommendated')}
            </Text>
            <Pressable onPress={() => navigation.navigate('Dishes')}>
              <Text className="text-primary-600">{t('home.all')}</Text>
            </Pressable>
          </View>

          {/* FoodCarousel */}
          <FoodCarousel dishes={recommendedFood} />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
