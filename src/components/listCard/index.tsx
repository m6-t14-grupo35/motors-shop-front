import { iAd } from "@/interfaces/cards.interfaces";
import { AdCard } from "../adCard";
import { iAd } from "@/interfaces/cards.interfaces";



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
      priceFIPE: 90000.99
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
      priceFIPE: 90000.99
    }
  ]

  return (
    <>
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        <AdCard isSold={true} price={80000} priceFIPE={90000} />
        <AdCard isSold={false} price={90000} priceFIPE={80000} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
        <AdCard isSold={true} />
        <AdCard isSold={false} />
      </div>
    </div>
    </>
  );
};
