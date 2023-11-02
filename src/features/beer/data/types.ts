export type Beer = {
  id: number;
  abv: number;
  attenuation_level: number;
  boil_volume: Amount;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  first_brewed: string;
  ebc: number;
  food_pairing: string[];
  ibu: number;
  image_url: string;
  ingredients: {
    hops: Hop[];
    malt: Malt[];
    yeast: string;
  };
  method: {
    fermentation: {
      temp: Amount;
      mash_temp: {duration:number, temp:Amount}[];
    };
    twist: string;
  };
  name: string;
  ph: number;
  srm: number;
  tagline: string;
  target_fm: number;
  target_og: number;
  volume: Amount;
};
type Hop = {
  add: string;
  amount: Amount;
  attribute: string;
  name: string;
};
type Malt = {
    amount:Amount,
    name:string
};
type Amount = {
  unit: string;
  value: number;
};
