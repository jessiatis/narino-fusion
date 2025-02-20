import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { COLORS } from '../constants/theme'
import { useTranslation } from 'react-i18next'

export default function PrivacyPoliciesScreen() {
  const navigation: any = useNavigation()
  const { t } = useTranslation()
  return (
      <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(4) }}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

        <ScrollView showsVerticalScrollIndicator={false} className="mt-4" style={{ paddingHorizontal: hp(1) }}>
          {/* Botón de ir atrás */}
          <TouchableOpacity
            className="w-auto self-start py-3 px-1 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={24} strokeWidth={1.8} color={'#6b7280'} />
          </TouchableOpacity>

          {/* Contenido */}
          <View className='px-2'>
            <Text className="text-primary-700 text-3xl mb-2 mt-6">
              {t('more.privacyPolicy')}
            </Text>

            <Text className='text-base mb-5 text-gray-400'>{t('privacyPolicy.lastUpdated')}</Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.introduction')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.introductionDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.informationCollected')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.informationCollectedDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.useOfInformation')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.useOfInformationDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.sharingInformation')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.sharingInformationDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.security')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.securityDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.yourRights')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-3'>
              {t('privacyPolicy.yourRightsDescription')}
            </Text>

            <Text className='text-lg font-medium text-gray-700'>{t('privacyPolicy.changesToPolicy')}</Text>
            <Text className='text-base text-gray-500 pl-2 mb-10'>
              {t('privacyPolicy.changesToPolicyDescription')}
            </Text>
          </View>
        </ScrollView>
      </View>
  )
}