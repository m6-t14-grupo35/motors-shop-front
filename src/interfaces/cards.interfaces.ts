export interface iAd {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: "Gasolina" | "Diesel" | "Etanol" | "GLP" | "Hybrid" | "Electric";
  km: number;
  color: string;
  price: number;
  priceFIPE: number;
  description: string;
  is_sold?: boolean;
  user_id: string;
  created_at: string;
}

export interface iUser {
  id: string,
  created_at: string,
  name: string,
  email: string,
  phone_number: string,
  reset_token: null,
  birthdate: string,
  description: string,
  is_seller: boolean,
  cpf: string
}