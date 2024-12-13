export interface DishType {
  id: number;
  backgroundImg: string;
  regionId: number;
  dishName: string;
  description: string;
  ingredients: string[];
  isFavorite: boolean;
}