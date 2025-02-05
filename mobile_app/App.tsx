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

const Stack = createStackNavigator()

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null)

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
    <FavoritesProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isFirstLaunch && <Stack.Screen name="Welcome" component={WelcomeScreen} />}
          <Stack.Screen name="MainTabs" component={TabNavigator} />
          <Stack.Screen name="Dishes" component={DishesScreen} />
          <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  )
}
