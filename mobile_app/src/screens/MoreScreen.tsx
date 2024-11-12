import { View, Text, StatusBar, ScrollView, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LinkBlock from '../components/LinkBlock'
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon,
} from 'react-native-heroicons/outline'

const LINKS = [
  {icon: ArrowTopRightOnSquareIcon, label: 'Visitar nuestro sitio web'},
  {icon: UserGroupIcon, label: 'Sobre nosotros'},
  {icon: EnvelopeIcon, label: 'Enviar un comentario'},
  {icon: EnvelopeIcon, label: 'Sugerir un plato o un lugar'},
  {icon: QuestionMarkCircleIcon, label: 'Preguntas frecuentes'},
  {icon: StarIcon, label: 'Calificar esta app'},
  {icon: ShareIcon, label: 'Compartir la app'},
  {icon: ShieldCheckIcon, label: 'Política de privacidad'},
]

export default function MoreScreen() {
  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(5)}}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="mt-10"
      >
        <Text className="text-primary-800 font-light text-xl pl-4">
          Más contenido en:
        </Text>

        {/* Links */}
        <View className="p-4 pl-6 gap-y-2">
          {LINKS.map(({icon, label}, i)=>(
            <View key={i}>
              <LinkBlock icon={icon} label={label} />
            </View>
          ))}
        </View>

        {/* Logos */}
        <View className="flex-row justify-center items-center">
          <Image
            className="w-52 h-28"
            resizeMode="contain"
            alt="Logo SENNOVA"
            source={{uri: 'https://narinofusion.co/wp-content/uploads/2024/07/Sennova.png'}}
            />
          <Image
            className="w-40 h-20"
            resizeMode="contain"
            alt="Logo SENA"
            source={{uri: 'https://narinofusion.co/wp-content/uploads/2024/09/sena.png'}}
          />
        </View>

        {/* Versión */}
        <View className="pb-28 pt-5">
          <Text className="text-center text-slate-500">
            Versión 1.0.0 - {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
