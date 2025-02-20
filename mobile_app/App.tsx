import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import WelcomeScreen from './src/screens/WelcomeScreen'
import DishesScreen from './src/screens/DishesScreen'
import DishDetailsScreen from './src/screens/DishDetailsScreen'
import TabNavigator from './src/components/TabNavigator'
import { FavoritesProvider } from './src/context/FavoritesContext'
import SplashScreen from 'react-native-splash-screen'
import MapScreen from './src/screens/MapScreen'
import PrivacyPoliciesScreen from './src/screens/PrivacyPoliciesScreen'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/translations/i18n.config'
import ARViewerScreen from './src/screens/ARViewerScreen'

const Stack = createStackNavigator()

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null)

  // Cargar idioma
  useEffect(()=>{
    const translate = async () => {
      try {
        const lng = await AsyncStorage.getItem('language')
        await i18n.changeLanguage(lng || 'es')
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
    translate()
  }, [])

  // Verificar si es la primera vez que se abre la app
  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('alreadyLaunched')
        if (value === null) {
          await AsyncStorage.setItem('alreadyLaunched', 'true')
          setIsFirstLaunch(true)
        } else {
          setIsFirstLaunch(false)
        }
      } catch (error) {
        setIsFirstLaunch(false)
      } finally {
        setTimeout(()=>{
          SplashScreen.hide()
        }, 300)
      }
    }
    checkFirstLaunch()
  }, [])

  if (isFirstLaunch === null) {
    return null
  }

  return (
    <I18nextProvider i18n={i18n}>
      <FavoritesProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isFirstLaunch && <Stack.Screen name="Welcome" component={WelcomeScreen} />}
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            <Stack.Screen name="Dishes" component={DishesScreen} />
            <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="PrivatePolicies" component={PrivacyPoliciesScreen} />
            <Stack.Screen name="ARViewer" component={ARViewerScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </I18nextProvider>
  )
}
