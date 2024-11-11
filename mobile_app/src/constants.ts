import HomeScreen from './screens/HomeScreen'
import { EllipsisHorizontalIcon, HeartIcon, HomeIcon, MapPinIcon, QueueListIcon } from 'react-native-heroicons/outline'

export const MENU_NAV = [
  {
    name: 'Favorites',
    label: 'Favoritos',
    icon: HeartIcon,
    component: HomeScreen,
  },
  {
    name: 'Regions',
    label: 'Regiones',
    icon: MapPinIcon,
    component: HomeScreen,
  },
  {
    name: 'Home',
    label: 'Inicio',
    icon: HomeIcon,
    component: HomeScreen,
  },
  {
    name: 'Plates',
    label: 'Lista de platos',
    icon: QueueListIcon,
    component: HomeScreen,
  },
  {
    name: 'More',
    label: 'Más...',
    icon: EllipsisHorizontalIcon,
    component: HomeScreen,
  },
]
