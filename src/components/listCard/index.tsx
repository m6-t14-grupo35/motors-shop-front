import { iAd } from "@/interfaces/cards.interfaces";
import { AdCard } from "../adCard";

export const ListCard = () => {
  const list: iAd[] = [
    {
      id: "1",
      brand: "Chevette",
      model: "SL",
      year: "1988",
      fuel: "Gasolina",
      km: 20000,
      color: "vermelho",
      price: 90000.99,
      description: "O carro mais desejado dos 90's em perfeito estado.",
      is_sold: true,
      priceFIPE: 90000.99,
      user_id: "1212",
      created_at: "2023-01-01"
    },
    {
      id: "2",
      brand: "Chevette",
      model: "SL",
      year: "1988",
      fuel: "Gasolina",
      km: 20000,
      color: "vermelho",
      price: 90000.99,
      description: "O carro mais desejado dos 90's em perfeito estado.",
      is_sold: true,
      priceFIPE: 90000.99,
      user_id: "2352",
      created_at: "2023-01-01"
    }
  ]

  return (
    <>
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">

        <AdCard 
        //@ts-ignore
        is_sold={true} price={80000} priceFIPE={90000} brand={"Chevette"} model={"SL"} year={"1988"} fuel={"Gasolina"} km={20000} color={"vermelho"} description={"O carro mais desejado dos 90's em perfeito estado."} user_id={"2352"} created_at={"2023-01-01"} />
        
      </div>
    </div>
    </>
  );
};
