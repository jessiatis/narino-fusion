import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { COLORS } from '../constants/theme'

export default function PrivacyPoliciesScreen() {
  const navigation: any = useNavigation()
  return (
      <View className="flex-1 bg-slate-200" style={{ paddingTop: hp(5) }}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
  
        <ScrollView showsVerticalScrollIndicator={false} className="mt-10" style={{ paddingHorizontal: hp(1) }}>
          {/* Botón de ir atrás */}
          <TouchableOpacity
            className="w-auto self-start p-3 bg-primary-600/80 rounded-full"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size={24} strokeWidth={1.8} color={COLORS.accent} />
          </TouchableOpacity>
        
          {/* Contenido */}
          <View className='px-2'>
            <Text className="text-primary-900 font-light text-3xl mb-2 mt-6">
              Políticas de privacidad
            </Text>

            <Text className='text-base mb-5'>Última actualización: 19 de febrero de 2025</Text>

            <Text className='text-lg font-semibold'>1. Introducción</Text>
            <Text className='text-base pl-2 mb-3'>
              En [Nombre de la Empresa], valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad describe cómo recopilamos, usamos, y compartimos tu información personal cuando utilizas nuestros servicios.
            </Text>

            <Text className='text-lg font-semibold'>2. Información que Recopilamos</Text>
            <Text className='text-base pl-2 mb-3'>
              Recopilamos información personal que nos proporcionas directamente, así como información que obtenemos automáticamente cuando utilizas nuestros servicios. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, y datos de uso.
            </Text>

            <Text className='text-lg font-semibold'>3. Uso de la Información</Text>
            <Text className='text-base pl-2 mb-3'>
              Utilizamos la información recopilada para proporcionar y mejorar nuestros servicios, personalizar tu experiencia, y comunicarnos contigo sobre actualizaciones y ofertas. También podemos usar tu información para fines de análisis y seguridad.
            </Text>

            <Text className='text-lg font-semibold'>4. Compartir Información</Text>
            <Text className='text-base pl-2 mb-3'>
              No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley, proteger nuestros derechos, o proporcionar nuestros servicios.
            </Text>

            <Text className='text-lg font-semibold'>5. Seguridad</Text>
            <Text className='text-base pl-2 mb-3'>
              Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, divulgación, alteración, o destrucción.
            </Text>

            <Text className='text-lg font-semibold'>6. Tus Derechos</Text>
            <Text className='text-base pl-2 mb-3'>
              Tienes derecho a acceder, corregir, y eliminar tu información personal. También puedes optar por no recibir comunicaciones de marketing. Para ejercer estos derechos, por favor contáctanos a [correo electrónico de contacto].
            </Text>

            <Text className='text-lg font-semibold'>7. Cambios en la Política de Privacidad</Text>
            <Text className='text-base pl-2 mb-10'>
              Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos sobre cualquier cambio significativo y te proporcionaremos la versión actualizada.
            </Text>
          </View>
        </ScrollView>
      </View>
  )
}