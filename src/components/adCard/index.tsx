import Image from "next/image";
import { AdDescription } from "../adDescription";
import { AdDetails } from "../adDetails";
import { AdPhoto } from "../adPhoto";
import { useRouter } from "next/router";

const user = {
  name: "Caio",

};

interface iAd {
  brand: string;
  model: string;
  year: string;
  km: number;
  price: number;
  priceFIPE: number;
  description: string;
  isSold: boolean;
}

export const AdCard = ({ isSold, price, priceFIPE }: iAd) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <div className="w-[312px] h-[420px] flex flex-col">
      <div className="h-[152px]">
        <div className="bg-grey-7 border-2 grey-7 relative hover:border-brand-1 flex justify-center">
          {pathname === "/user" && (
            isSold === true ? (
              <button className="flex justify-center items-center px-[8px] h-[24px] absolute top-[11px] left-[16px] bg-brand-1 text-white body-2-500">
                Ativo
              </button>
            ) : (
              <button className="flex justify-center items-center px-[8px] h-[24px] absolute top-[11px] left-[16px] bg-grey-4 text-white body-2-500">
                Inativo
              </button>
            )
          )}
          <Image
            width={262}
            height={150.28}
            src={"/CarroCard.svg"}
            alt="Card do Carro"
          />
          {
            price < priceFIPE && pathname === "/"? (
              <p className="flex justify-center w-[15px] h-[27px] absolute top-0 right-0 bg-random-7 text-white">$</p>
            ): null
          }
        </div>
        <div className="space-y-3">
          <p className="body-1-600 truncate">
            Product title stays here - max 1 line
          </p>
          <p className="body-1-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          {pathname !== "/admin" && (
              <div className="flex items-center space-x-2">
              <p className="h-8 w-8 rounded-full bg-purple-950 gray-0 text-white flex items-center justify-center">
                A
              </p>
              <p>Anunciante</p>
            </div>
          )}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                0KM
              </button>
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                2019
              </button>
            </div>
            <p className="heading-7-600">R${price}</p>
          </div>
          {pathname === "/admin" && (
              <div className="flex flex-row gap-[16px]">
              <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">Editar</button>
              <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">Detalhes</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
