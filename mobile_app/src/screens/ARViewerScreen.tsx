import * as React from 'react';
import { Alert, Linking, StyleSheet, View } from 'react-native';
import { ArViewerView } from 'react-native-ar-viewer';
import { DishType } from '../types';

type Props = { route?: { params: { dish: DishType } } }

export default function ARViewerScreen({ route }: Props) {
  const { dish } = route!.params
  return (
    <View style={styles.container}>
      <ArViewerView
        model={`file:///android_asset/custom/${dish["3DModel"]}`}
        style={styles.arView}
        disableInstantPlacement
        manageDepth
        allowRotate
        allowScale
        allowTranslate
        onStarted={() => console.log('Iniciado')}
        onEnded={() => console.log('Finalizado')}
        onModelPlaced={() => console.log('Modelo mostrado')}
        onModelRemoved={() => console.log('Modelo ya no es visible')}
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
  },
  arView: {
    flex: 2,
  },
});