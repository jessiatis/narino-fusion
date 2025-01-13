export interface DishType {
  id: number;
  name: string;
  backgroundImg: string;
  regionId: number;
  description: string;
  ingredients: string[];
  photographs: string[];
  isFavorite: boolean;
}
