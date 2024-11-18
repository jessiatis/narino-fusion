import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import FoodCard, { FoodCardProps } from './FoodCard'
import { useNavigation } from '@react-navigation/native'

interface FoodCarouselProps {
  dishes: Array<FoodCardProps>;
}

const FoodCarousel: React.FC<FoodCarouselProps> = ({ dishes }) => {
  const navigation: any = useNavigation()
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dishes.map((dish) => (
        <TouchableOpacity key={dish.id} className="ml-4" onPress={() => navigation.navigate('DishDetails', { dish })}>
          <FoodCard {...dish} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default FoodCarousel
