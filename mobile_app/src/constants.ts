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
