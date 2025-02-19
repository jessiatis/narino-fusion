import { View, Text, StatusBar, ScrollView, Image, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinkBlock from '../components/LinkBlock';
import {
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ShareIcon,
  ShieldCheckIcon,
  StarIcon,
} from 'react-native-heroicons/outline';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DOMAIN = 'narinofusion.co' 
const PLAY_STORE_APP_ID = 'com.whatsapp' // 🚩 Cambiar por ID de app

export default function MoreScreen() {
  const navigation: any = useNavigation()

  const LINKS = [
    { 
      icon: ArrowTopRightOnSquareIcon, 
      label: 'Visitar nuestro sitio web', 
      action: () => Linking.openURL(`https://www.${DOMAIN}`) 
    },
    { 
      icon: QuestionMarkCircleIcon, 
      label: 'Contactanos', 
      action: () => Linking.openURL(`https://${DOMAIN}/contacto`) 
    },
    { 
      icon: EnvelopeIcon, 
      label: 'Enviar un comentario', 
      action: () => Linking.openURL(`mailto:info@${DOMAIN}?subject=Comentarios%20sobre%20la%20app`) 
    },
    { 
      icon: EnvelopeIcon,
      label: 'Sugerir un plato o un lugar', 
      action: () => Linking.openURL(`mailto:info@${DOMAIN}?subject=Sugerencia%20de%20plato%20o%20lugar`)
    },
    { 
      icon: StarIcon,
      label: 'Calificar esta app', 
      action: () => Linking.openURL(`market://details?id=${PLAY_STORE_APP_ID}`) 
    },
    { 
      icon: ShareIcon,
      label: 'Compartir la app', 
      action: () => Share.share({ message: `Descarga esta app: https://play.google.com/store/apps/details?id=${PLAY_STORE_APP_ID}` }) 
    },
    { 
      icon: ShieldCheckIcon,
      label: 'Política de privacidad', 
      action: () => navigation.navigate('PrivatePolicies')
    },
  ];
  
  return (
    <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(5) }}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        <Text className="text-primary-800 font-light text-xl pl-4">
          Más contenido en:
        </Text>

        {/* Links */}
        <View className="p-4 pl-6 gap-y-2 mb-4">
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
        <View className="pb-28 pt-5">
          <Text className="text-center text-slate-500">
            Versión 1.0.0 - {new Date().getFullYear()}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
