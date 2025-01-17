import { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { BottomSheetView, BottomSheetModal } from "@gorhom/bottom-sheet";
import { DishType } from "../types";
import { heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import { HeartIcon } from "react-native-heroicons/solid";
import { REGIONS } from "../constants/regions";
import { COLORS } from "../constants/theme";
import { useFavorites } from "../context/FavoritesContext";
import { useNavigation } from "@react-navigation/native";

interface MapBottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>
  dish: DishType | null; 
}

export default function MapBottomSheet({ dish: selectedDish, bottomSheetRef }: MapBottomSheetProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [dish, setDish] = useState<DishType | null>(null)
  const [snapPoint, setSnapPoint] = useState<string | null>(null)

  const navigation: any = useNavigation()
  const { verifyFavorite, toggleFavorite } = useFavorites()

  const region = REGIONS.find(region => region.id === dish?.regionId)

  // Efecto rebote
  useEffect(()=>{
    setSnapPoint('1%')
    setTimeout(() => {
      setDish(selectedDish)
      setSnapPoint(null)
    }, 150);
  },[selectedDish])


  const onAR = () => {
    Alert.alert('[📌 Pendiente: Map]')
  }

  // Actualizar el estado favorito
  useEffect(() => {
    dish && setIsFavorite(verifyFavorite(dish.id))
  }, [dish?.id, verifyFavorite]);

  // Manejar el cambio de estado favorito
  const onFavorite = async () => {
    setIsFavorite(prev => !prev)
    dish && await toggleFavorite(dish.id)
  }

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      snapPoints={snapPoint ? [snapPoint] : undefined}
    >
      <BottomSheetView>
        {dish ? (
          <>
            <View
              className="relative rounded-2xl overflow-hidden justify-between items-center p-4 pb-0"
              style={{
                width: '100%',
                height: 'auto',
                padding: hp(0.7),
                flexDirection: 'row',
              }}
            >
              {/* Background Image */}
              <Image
                className="inset-0"
                source={{ uri: dish.backgroundImg }}
                resizeMode="cover"
                style={{
                  width: 100,
                  borderRadius: hp(1.5),
                  height: 100,
                  position: 'relative',

                }}
              />
              
              {/* Information Box */}
              <View
                className="bottom-0 left-0 right-0 bg-white p-4 rounded-lg shadow-md flex-row justify-between items-center"
                style={{
                  position: 'static',
                  shadowColor: 'transparent',
                  margin: 0,
                  marginRight: 0,
                }}

              >
                <View style={{ flex: 1 }}>
                  <View className="flex-row items-center gap-1.5 mb-1">
                    <View className="w-1.5 h-1.5 rounded-full aspect-square" style={{backgroundColor: region?.color}} />


                    <Text className="uppercase text-xs tracking-widest font-semibold opacity-90" style={{color: region?.color}}>
                      Región {region?.name}
                    </Text>

                  </View>
                  <Text className="text-lg font-bold text-primary-900/80" numberOfLines={1} ellipsizeMode="tail" style={{width: widthPercentageToDP(50)}}>
                    {dish.name} 
                  </Text>
                  <Text className="text-sm text-primary-900/70 -mt-0.5" numberOfLines={2} ellipsizeMode="tail" style={{width: widthPercentageToDP(50)}}>
                    {dish.description}
                  </Text>
                </View>
              </View>
        
              {/* Favorite Button */}
              <TouchableOpacity 
                className="absolute top-3 right-3 bg-slate-50 p-3 shadow-lg shadow-primary-800 rounded-full" 
                onPress={onFavorite}
              >
                <HeartIcon
                  size={20}
                  color={COLORS[isFavorite ? 'secondary' : 'primary']}
                  opacity={isFavorite ? 1 : 0.5}
                />
              </TouchableOpacity>
            </View>
            
            {/* Botones de acción */}
            <View className="flex-row justify-between items-center p-4 pt-0">
              <TouchableOpacity className="flex-1 bg-primary-500 p-2 rounded-md" onPress={() => navigation.navigate('DishDetails', { dish })}>
                <Text className="text-white text-lg font-semibold text-center">Ver detalles</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text className='text-3xl'>No se ha seleccionado ningun plato</Text>
        )}
      </BottomSheetView>
    </BottomSheetModal>
  )
}
