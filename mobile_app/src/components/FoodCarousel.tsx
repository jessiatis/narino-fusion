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
          <FoodCard
            id={item.id}
            backgroundImg={item.backgroundImg}
            region={item.region}
            dishName={item.dishName}
            description={item.description}
            isFavorite={item.isFavorite}
            onFavoritePress={item.onFavoritePress}
            onMapPress={item.onMapPress}
            onArPress={item.onArPress}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default FoodCarousel
