import HomeScreen from './screens/HomeScreen'
import { EllipsisHorizontalIcon, HomeIcon, MapPinIcon, QueueListIcon } from 'react-native-heroicons/outline'
import DishesScreen from './screens/DishesScreen'

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
    component: HomeScreen,
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
    component: HomeScreen,
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
