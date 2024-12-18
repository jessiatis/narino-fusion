import HomeScreen from './screens/HomeScreen'
import { EllipsisHorizontalIcon, HomeIcon, MapPinIcon, QueueListIcon } from 'react-native-heroicons/outline'
import DishesScreen from './screens/DishesScreen'
import MoreScreen from './screens/MoreScreen'
import RegionsScreen from './screens/RegionsScreen'

export const COLORS = {
  primary: '#646633',
  accent: '#f6ff52',
  secondary: '#d02427',
}

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
    label: 'Más...',
    icon: EllipsisHorizontalIcon,
    component: MoreScreen,
  },
]

export const REGIONS = [
  {
    id: 1,
    name: 'Andina',
    color: '#d97706',
    description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
    image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
  },
  {
    id: 2,
    name: 'Pacífica',
    color: '#2563eb',
    description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
    image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
  },
  {
    id: 3,
    name: 'Amazónica',
    color: '#16a34a',
    description: 'Descripción corta de la región, sus caracteristicas o algún dato interesante.',
    image: 'https://www.cotelconarino.org/images/narino/la-cocha.jpg',
  },
]
