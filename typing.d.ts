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