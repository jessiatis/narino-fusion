export interface DishType {
  id: number;
  name: string;
  backgroundImg: string;
  location: { lat: number, long: number };
  regionId: number;
  description: string;
  ingredients: string[];
  photographs: string[];
}
