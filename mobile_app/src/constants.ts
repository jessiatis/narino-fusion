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
    label: 'Más',
    icon: EllipsisHorizontalIcon,
    component: MoreScreen,
  },
]

export const REGIONS = [
  {
    id: 1,
    name: 'Pacífica',
    color: '#d5bd1c',
    description: 'Un lugar cálido y lleno de vida, con lluvias que alimentan manglares y selvas tropicales llenas de color y biodiversidad.',
    image: 'https://narinofusion.co/wp-content/uploads/2022/07/menu-heading-background-1.webp',
  },
  {
    id: 2,
    name: 'Andina',
    color: '#078930',
    description: 'El hogar de montañas imponentes, como el volcán Galeras, con paisajes únicos que combinan altiplanos y profundos cañones.',
    image: 'https://narinofusion.co/wp-content/uploads/2022/07/menu-heading-background-2.webp',
  },
  {
    id: 3,
    name: 'Amazónica',
    color: '#ff7f00',
    description: 'Un rincón mágico de bosques espesos y montañas, donde la laguna de La Cocha se convierte en un verdadero paraíso.',
    image: 'https://narinofusion.co/wp-content/uploads/2022/07/menu-heading-background-3.webp',
  },
]
