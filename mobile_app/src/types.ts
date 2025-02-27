export interface DishType {
  id: number;
  name: string;
  backgroundImg: string;
  locations: Array<{ lat: number; long: number }>;
  regionId: number;
  description: string;
  details: string;
  ingredients: string[];
  photographs: string[];
  "3DModel": string;
}
