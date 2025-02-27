import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ArViewerView } from 'react-native-ar-viewer';
import { DishType } from '../types';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../constants/theme';

type Props = { route?: { params: { dish: DishType } } }

export default function ARViewerScreen({ route }: Props) {
  const navigation = useNavigation()
  const { dish } = route!.params
  return (
    <View style={styles.container}>
      {/* Botón de ir atrás */}
      <TouchableOpacity
        className="w-auto self-start p-3 bg-primary-600/80 rounded-full absolute top-16 left-4 z-50"
        onPress={() => navigation.goBack()}
      >
        <ArrowLeftIcon size={24} strokeWidth={1.8} color={COLORS.accent} />
      </TouchableOpacity>

      <ArViewerView
        style={{ flex: 1 }}
        model={`file:///android_asset/custom/${dish["3DModel"]}`}
        manageDepth
        allowRotate
        allowScale
        planeOrientation='horizontal'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  list: {
    flex: 1,
  }
});