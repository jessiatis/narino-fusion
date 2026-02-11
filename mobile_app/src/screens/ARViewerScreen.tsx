import * as React from 'react';
import { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ArViewerView } from 'react-native-ar-viewer';
import { DishType } from '../types';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ExclamationTriangleIcon } from 'react-native-heroicons/outline';
import { COLORS } from '../constants/theme';
import { useTranslation } from 'react-i18next';

type Props = { route?: { params: { dish: DishType } } }

export default function ARViewerScreen({ route }: Props) {
  const navigation = useNavigation()
  const { dish } = route!.params
  const { t } = useTranslation()
  const [showWarning, setShowWarning] = useState(true)

  return (
    <View style={styles.container}>
      {/* Modal de advertencia de seguridad para RA */}
      <Modal
        visible={showWarning}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Icono de advertencia */}
            <View style={styles.iconContainer}>
              <ExclamationTriangleIcon size={40} color={COLORS.secondary} />
            </View>

            {/* Título */}
            <Text style={styles.modalTitle}>
              {t('arWarning.title')}
            </Text>

            {/* Descripción */}
            <Text style={styles.modalDescription}>
              {t('arWarning.description')}
            </Text>

            {/* Puntos de seguridad */}
            <View style={styles.bulletContainer}>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  {t('arWarning.parentalSupervision')}
                </Text>
              </View>
              <View style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.bulletText}>
                  {t('arWarning.beAware')}
                </Text>
              </View>
            </View>

            {/* Botones */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.cancelButtonText}>
                  {t('arWarning.goBack')}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => setShowWarning(false)}
              >
                <Text style={styles.acceptButtonText}>
                  {t('arWarning.accept')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modalContent: {
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    padding: 28,
    width: '100%',
    maxWidth: 380,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(246, 255, 82, 0.2)',
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(208, 36, 39, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  modalDescription: {
    fontSize: 14,
    color: '#BBBBBB',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  bulletContainer: {
    width: '100%',
    marginBottom: 24,
    gap: 12,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(100, 102, 51, 0.15)',
    padding: 12,
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.accent,
  },
  bulletDot: {
    fontSize: 18,
    color: COLORS.accent,
    marginRight: 10,
    lineHeight: 22,
  },
  bulletText: {
    fontSize: 14,
    color: '#DDDDDD',
    flex: 1,
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#AAAAAA',
  },
  acceptButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
  },
  acceptButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.accent,
  },
});