import { DishType } from '../types'

export const DISHES: DishType[] = [
  {
    id: 1,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
    regionId: 1,
    name: 'Pan de Maíz',
    location: { lat: 1.804904, long: -78.770073 },
    description: 'Pan tradicional elaborado a base de maíz, característico de las veredas andinas, que destaca por su textura suave y su sabor ligeramente dulce.',
    details: 'El Pan de Maíz es un delicioso pan tradicional hecho a base de maíz, siendo conocido por su suave textura y un toque ligeramente dulce. Perfecto para acompañar cualquier comida y un ícono de las tradiciones culinarias de la región.',
    ingredients: ['Maíz', 'Agua', 'Sal', 'Azúcar', 'Levadura'],
    photographs: [
      'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
    ]
  },
  {
    id: 2,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
    regionId: 2,
    name: 'Arepa de Huevo',
    location: {lat: 2.479253, long: -78.107561},
    description: 'Deliciosa arepa frita rellena de huevo, un plato popular en la costa atlántica, ideal para un desayuno energético.',
    details: 'La Arepa de Huevo es un plato icónico de la costa atlántica, caracterizada por su masa de harina de maíz frita, rellena de huevo. Este delicioso manjar se sirve caliente y es ampliamente disfrutado como desayuno o merienda.',
    ingredients: ['Harina de maíz', 'Huevo', 'Agua', 'Sal', 'Aceite'],
    photographs: [
      'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
      'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
    ]
  },
  {
    id: 3,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
    regionId: 3,
    name: 'Sancocho de Pescado',
    location: { lat: 0.828582, long: -77.641990},
    description: 'Reconfortante sopa de pescado acompañada de yuca y plátano, típica de las regiones costeras y muy apreciada en encuentros familiares.',
    details: 'El Sancocho de Pescado es una sopa tradicional que combina pescado fresco con yuca, plátano, y diversas hierbas y especias. Este plato reconfortante es conocido por su sabor robusto y es a menudo parte de las celebraciones familiares en la región del Pacífico.',
    ingredients: ['Pescado', 'Yuca', 'Plátano', 'Papa', 'Cilantro', 'Ñame', 'Cebolla', 'Ajo'],
    photographs: [
      'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
    ]
  },
  {
    id: 4,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
    regionId: 3,
    name: 'Pirarucú Asado',
    location: { lat: 1.916618, long: -78.058379},
    description: 'Pez pirarucú asado a la parrilla, un manjar de la Amazonía que destaca por su carne jugosa y sabor único.',
    details: 'El Pirarucú Asado es un plato destacado de la Amazonía, preparado con el enorme pez pirarucú que se asa con ajo, limón y especias. Su carne es suave y al mismo tiempo robusta, brindando una experiencia gastronómica única que refleja la riqueza de la región.',
    ingredients: ['Pirarucú', 'Ajo', 'Limón', 'Sal', 'Pimienta', 'Aceite'],
    photographs: [
      'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
      'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
    ]
  },
  {
    id: 5,
    backgroundImg: 'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
    regionId: 1,
    name: 'Mamona',
    location: { lat: 2.000956, long: -77.453120 },
    description: 'Carne de res asada marinada, símbolo de la gastronomía llanera, ideal para disfrutar en fiestas y reuniones.',
    details: 'La Mamona es un platillo tradicional a base de carne de res marinado y cocido a la parrilla, conocido por su sabor intenso y textura tierna. Suele acompañarse con yuca y ensaladas, convirtiéndose en un favorito en reuniones y festividades.',
    ingredients: ['Carne de res', 'Ajo', 'Sal', 'Pimienta', 'Cerveza'],
    photographs: [
      'https://narinofusion.co/wp-content/uploads/2024/09/7-1536x799.jpeg',
      'https://narinofusion.co/wp-content/uploads/2022/07/subscribe-form-background.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/Inicio-1536x1024.jpg',
      'https://narinofusion.co/wp-content/uploads/2024/07/Lapingachos-home-1536x858.webp',
      'https://narinofusion.co/wp-content/uploads/2024/09/6.jpeg',
    ]
  },
]
