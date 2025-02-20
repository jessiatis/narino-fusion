import { View, Text, StatusBar, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinkBlock from '../components/LinkBlock';
import {
  ArrowTopRightOnSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ShareIcon,
  ShieldCheckIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const DOMAIN = 'narinofusion.co'
const PLAY_STORE_APP_ID = 'com.narino_fusion'

export default function MoreScreen() {
  const navigation: any = useNavigation()
  const { t } = useTranslation()

  const LINKS = [
    {
      icon: ArrowTopRightOnSquareIcon,
      label: t('more.visitWebsite'),
      action: () => Linking.openURL(`https://www.${DOMAIN}`)
    },
    {
      icon: ChatBubbleLeftRightIcon,
      label: t('more.contactUs'),
      action: () => Linking.openURL(`https://${DOMAIN}/contacto`)
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      label: t('more.sendComment'),
      action: () => Linking.openURL(`mailto:info@${DOMAIN}?subject=Comentarios%20sobre%20la%20app`)
    },
    {
      icon: EnvelopeIcon,
      label: t('more.suggestDish'),
      action: () => Linking.openURL(`mailto:info@${DOMAIN}?subject=Sugerencia%20de%20plato%20o%20lugar`)
    },
    {
      icon: StarIcon,
      label: t('more.rateApp'),
      action: () => Linking.openURL(`market://details?id=${PLAY_STORE_APP_ID}`)
    },
    {
      icon: ShareIcon,
      label: t('more.shareApp'),
      action: () => Share.share({ message: `Descarga esta app: https://play.google.com/store/apps/details?id=${PLAY_STORE_APP_ID}` })
    },
    {
      icon: ShieldCheckIcon,
      label: t('more.privacyPolicy'),
      action: () => navigation.navigate('PrivatePolicies')
    },
  ];

  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(4) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-7">
        <Text className="text-primary-800 font-light text-xl pl-4">
          {t('more.moreContent')}
        </Text>

        {/* Links */}
        <View className="p-4 pl-6 gap-y-2">
          {LINKS.map(({ icon: Icon, label, action }, i) => (
            <TouchableOpacity key={i} onPress={action}>
              <LinkBlock icon={Icon} label={label} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logos */}
        <View className="flex-row justify-center items-center">
          <Image
            className="w-52 h-28"
            resizeMode="contain"
            alt="Logo SENNOVA"
            source={{ uri: 'https://narinofusion.co/wp-content/uploads/2024/07/Sennova.png' }}
          />
          <Image
            className="w-40 h-20"
            resizeMode="contain"
            alt="Logo SENA"
            source={{ uri: 'https://narinofusion.co/wp-content/uploads/2024/09/sena.png' }}
          />
        </View>

        {/* Versión */}
        <View className="pb-28 pt-4">
          <Text className="text-center text-slate-500">
            {t('more.version')} {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
