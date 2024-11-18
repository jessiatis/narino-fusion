import { DishType } from '../types'

export const DISHES: DishType[] = [
  {
    id: 1,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
    regionId: 1,
    dishName: 'Pan de Maíz',
    description: 'Vereda Tola de las Lajas',
    ingredients: ['Maíz', 'Agua', 'Sal', 'Azúcar', 'Levadura'],
    isFavorite: false,
  },
  {
    id: 2,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
    regionId: 2,
    dishName: 'Arepa de Huevo',
    ingredients: ['Harina de maíz', 'Huevo', 'Agua', 'Sal', 'Aceite'],
    description: 'Costa Atlántica',
    isFavorite: true,
  },
  {
    id: 3,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
    regionId: 3,
    dishName: 'Sancocho de Pescado',
    ingredients: ['Pescado', 'Yuca', 'Plátano', 'Papa', 'Cilantro', 'Ñame', 'Cebolla', 'Ajo'],
    description: 'Buenaventura',
    isFavorite: false,
  },
  {
    id: 4,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
    regionId: 3,
    dishName: 'Pirarucú Asado',
    description: 'Leticia',
    ingredients: ['Pirarucú', 'Ajo', 'Limón', 'Sal', 'Pimienta', 'Aceite'],
    isFavorite: true,
  },
  {
    id: 5,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
    regionId: 1,
    dishName: 'Mamona',
    description: 'Villavicencio',
    ingredients: ['Carne de res', 'Ajo', 'Sal', 'Pimienta', 'Cerveza'],
    isFavorite: false,
  },
]
