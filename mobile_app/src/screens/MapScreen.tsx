import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import LeafletMap from '../components/LeafletMap';
import { COLORS } from '../constants/theme';

type Props = {
  route?: {
    params: {
      locations: Array<{ latitude: number; longitude: number; markerImage: string }>
    }
  }
}

export default function MapScreen({ route }: Props) {
  const navigation = useNavigation();
  const { locations } = route!.params;

  return (
    <View className="flex-1">
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Botón de regreso */}
      <TouchableOpacity
        className="absolute top-12 left-4 z-50 w-auto self-start p-3 bg-white border-2 border-slate-400/30 shadow-lg shadow-black/70 rounded-full"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={24} strokeWidth={1.8} color={COLORS.primary} />
      </TouchableOpacity>

      {/* Mapa */}
      <LeafletMap locations={locations} />
    </View>
  );
}
