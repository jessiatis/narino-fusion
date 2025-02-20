import { View, TextInput, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

interface InputSearchProps {
  value: string
  onChangeText: (text: string) => void
  onSearch?: () => void
}

export default function InputSearch({value, onChangeText, onSearch }: InputSearchProps) {
  const navigation = useNavigation()
  const { t } = useTranslation()

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      onChangeText('')
    })
    return unsubscribe
  }, [navigation])

  return (
    <View
      className="flex-row items-center rounded-full bg-gray-50"
      style={{ marginHorizontal: hp(2), padding: hp(0.4) }}
    >
      <TextInput
        className="flex-1 text-lg tracking-wider text-gray-600"
        value={value}
        onChangeText={onChangeText}
        placeholder={t('inputSearch.placeholder')}
        placeholderTextColor="#9ca3af"
        style={{ marginBottom: hp(0.3), paddingLeft: hp(2.3) }}
      />
      <Pressable
        className="bg-slate-200 rounded-full"
        style={{ padding: hp(1.7) }}
        onPress={onSearch}
      >
        <MagnifyingGlassIcon size={hp(3.6)} strokeWidth={2.3} color="#555b25" />
      </Pressable>
    </View>
  )
}
