export interface DataType  {
    id: number;
    title: string;
    age: string;
    color: string;
    price: number;
    gender: string;
    image: StaticImageData
    popularity?: string;
    breed: "small"| 'medium'| 'large';
}
export interface FilterState {
  gender: 'Male'| 'Female'| null;
  color: 'red' | 'black&white' |'black' | 'silver' | "apricot" |'tan' | null
  breed: "small"| 'medium'| 'large'| null
}