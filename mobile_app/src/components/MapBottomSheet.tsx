import { useCallback, useEffect, useState } from "react";
import { Text } from "react-native";
import { BottomSheetView, BottomSheetModal } from "@gorhom/bottom-sheet";
import { DishType } from "../types";

interface MapBottomSheetProps {
  bottomSheetRef: React.RefObject<BottomSheetModal>
  dish: DishType | null; 
}

export default function MapBottomSheet({ dish: selectedDish, bottomSheetRef }: MapBottomSheetProps) {
  const [dish, setDish] = useState<DishType | null>(null)
  const [snapPoint, setSnapPoint] = useState('40%')
  
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Efecto rebote
  useEffect(()=>{
    setSnapPoint('1%')
    setTimeout(() => {
      setDish(selectedDish)
      setSnapPoint('40%')
    }, 150);
  },[selectedDish])
  
  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={[snapPoint]}
    >
      <BottomSheetView 
        style={{ flex: 1, padding: 36, alignItems: 'center' }}
      >
        {dish ? (
          <Text className='text-3xl'>{dish.name} 🎉</Text>
        ) : (
          <Text className='text-3xl'>No se ha seleccionado ningun plato</Text>
        )}
      </BottomSheetView>
    </BottomSheetModal>
  )
}
