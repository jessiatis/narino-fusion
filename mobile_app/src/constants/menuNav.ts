import HomeScreen from '../screens/HomeScreen'
import { EllipsisHorizontalIcon, HomeIcon, MapPinIcon, QueueListIcon } from 'react-native-heroicons/outline'
import DishesScreen from '../screens/DishesScreen'
import MoreScreen from '../screens/MoreScreen'
import RegionsScreen from '../screens/RegionsScreen'
import { useTranslation } from 'react-i18next'

export const MENU_NAV = [
  {
    name: 'Home',
    label: 'menuNav.home',
    icon: HomeIcon,
    component: HomeScreen,
  },
  {
    name: 'Regions',
    label: 'menuNav.regions',
    icon: MapPinIcon,
    component: RegionsScreen,
  },
  {
    name: 'Dishes',
    label: 'menuNav.dishes',
    icon: QueueListIcon,
    component: DishesScreen,
  },
  {
    name: 'More',
    label: 'menuNav.more',
    icon: EllipsisHorizontalIcon,
    component: MoreScreen,
  },
]
