import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import WelcomeScreen from './src/screens/WelcomeScreen'
import DishesScreen from './src/screens/DishesScreen'
import DishDetailsScreen from './src/screens/DishDetailsScreen'
import { MENU_NAV } from './src/constants'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated'

// Desactivar modo estricto de Reanimated
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
})

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const CustomTabBarBackground = () => {
  return (
    <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, backgroundColor: '#010101' }}>
      <Svg
        width={wp(102)}
        height={wp(101) * (44 / 294)}
        viewBox="0 0 294 44"
        style={{ position: 'absolute', top: -wp(98) * (44 / 294), left: -wp(1) }}
      >
        <Path fill="#010101" d="M250,39H44C21.39,39,2.77,21.94,0.29,0H0v44h294V0h-0.29C291.23,21.94,272.61,39,250,39z"/>
      </Svg>
    </View>
  )
}

const tabBarBackground = () => <CustomTabBarBackground />

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          borderTopWidth: 0,
          backgroundColor: '#010101',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#7a7a7a',
        tabBarIcon: ({ focused, color, size }) => {
          const { icon: Icon, label } = MENU_NAV.find(({ name }) => name === route.name)!
          const backgroundColor = focused ? '#70811c' : 'transparent'
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor, padding: 10, borderRadius: 25 }}>
                <Icon color={color} size={size} strokeWidth={1.3} />
              </View>
              <Text style={{ color, fontSize: hp(1.5), marginTop: 2 }}>{label}</Text>
            </View>
          )
        },
        tabBarBackground,
      })}
    >
      {MENU_NAV.map(({ name, component: Screen }) => (
        <Tab.Screen key={name} name={name} component={Screen} />
      ))}
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Dishes" component={DishesScreen} />
        <Stack.Screen name="DishDetails" component={DishDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
