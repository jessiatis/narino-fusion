import HomeScreen from '../screens/HomeScreen'
import { EllipsisHorizontalIcon, HomeIcon, MapPinIcon, QueueListIcon } from 'react-native-heroicons/outline'
import DishesScreen from '../screens/DishesScreen'
import MoreScreen from '../screens/MoreScreen'
import RegionsScreen from '../screens/RegionsScreen'

export const MENU_NAV = [
  {
    name: 'Home',
    label: 'Inicio',
    icon: HomeIcon,
    component: HomeScreen,
  },
  {
    name: 'Regions',
    label: 'Regiones',
    icon: MapPinIcon,
    component: RegionsScreen,
  },
  {
    name: 'Dishes',
    label: 'Lista de platos',
    icon: QueueListIcon,
    component: DishesScreen,
  },
  {
    name: 'More',
    label: 'Más',
    icon: EllipsisHorizontalIcon,
    component: MoreScreen,
  },
]