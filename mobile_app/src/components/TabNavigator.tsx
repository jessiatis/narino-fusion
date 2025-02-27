import { MENU_NAV } from '../constants/menuNav'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Svg, { Path } from 'react-native-svg'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator()

// Barra de navegación
export default function TabNavigator () {
  const { t } = useTranslation()

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
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#7a7a7a',
        tabBarIcon: ({ focused, color, size }) => {
          const { icon: Icon, label } = MENU_NAV.find(({ name }) => name === route.name)!
          const backgroundColor = focused ? '#70811c' : 'transparent'
          return (
            <View style={{ width: wp(20),justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ backgroundColor, padding: 10, borderRadius: 25 }}>
                <Icon color={color} size={size} strokeWidth={1.3} />
              </View>
              <Text style={{ color, fontSize: wp(3), marginTop: 2, textAlign: 'center' }}>{t(label)}</Text>
            </View>
          )
        },
        tabBarBackground: () => <CustomTabBarBackground />,
      })}
    >
      {MENU_NAV.map(({ name, component: Screen }) => (
        <Tab.Screen key={name} name={name} component={Screen} />
      ))}
    </Tab.Navigator>
  )
}

// Curvas inversas de la barra de navegación
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