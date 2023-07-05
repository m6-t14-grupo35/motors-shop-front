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
    <div className="my-2 overflow-x-auto mx-[60px] mb-[80px]">
      <div className="flex md:flex-wrap gap-12 md:justify-normal transition-all">
        {list.length ? (
          list.map((item: iAd) => (
            <AdCard key={item.id} isSold={item.is_sold} price={item.price} brand={item.brand} model={item.model} year={item.year} km={item.km} priceFIPE={item.priceFIPE} description={item.description}/>
          ))
        ) : (
          <div className=" w-full flex justify-center items-center">
            <h3 className="heading-6-500">Você ainda não tem nenhum anúncio publicado.</h3>
          </div>
        )}
      </div>
    </div>
  );
};
