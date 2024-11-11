import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import FoodCard, { FoodCardProps } from './FoodCard'

interface FoodCarouselProps {
  data: Array<FoodCardProps>;
}

const FoodCarousel: React.FC<FoodCarouselProps> = ({ data }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} className="ml-4">
          <FoodCard {...item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default FoodCarousel
