import React, { createContext, useContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DishType } from '../types'

interface FavoritesContextType {
  favorites: DishType['id'][]
  toggleFavorite: (dishId: DishType['id']) => Promise<void>
  verifyFavorite: (dishId: DishType['id']) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<DishType['id'][]>([])

  // Cargar favoritos desde AsyncStorage
  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites')
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites))
      }
    } catch (error) {
      console.error('Error al cargar favoritos:', error)
    }
  }

  // Cargar favoritos al iniciar la aplicación
  useEffect(() => {
    loadFavorites()
  }, [])
  
  // Toggle favorito
  const toggleFavorite = async (dishId: DishType['id']) => {
    try {
      const newFavorites = favorites.includes(dishId)
        ? favorites.filter(id => id !== dishId)
        : [...favorites, dishId]
      
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites))
      setFavorites(newFavorites)
    } catch (error) {
      console.error('Error al actualizar favoritos:', error)
    }
  }

  // Verificar si un plato es favorito
  const verifyFavorite = (dishId: DishType['id']) => favorites.includes(dishId)

  // Proveer el contexto
  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, verifyFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de un FavoritesProvider')
  }
  return context
} 