type BrandType ={
 id: number;
 name: string;
}

type RacketType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId:  number;
  brand: BrandType;
}

export default RacketType;
