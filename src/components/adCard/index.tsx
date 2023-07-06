import Image from "next/image";
import { AdDescription } from "../adDescription";
import { AdDetails } from "../adDetails";
import { AdPhoto } from "../adPhoto";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { api } from "@/services/api";
import { iAd, iUser } from "@/interfaces/cards.interfaces";
import { adData } from "@/schemas/ads.schemas";
import { parseCookies } from "nookies";

interface ICardProps {
  year: string;
  km: number;
  brand: string;
  model: string;
  priceFIPE: any;
  price: any;
  user_id: any;
  is_sold: boolean;
}

export const AdCard = ({ ad }: {ad: ICardProps}) => {
  if (ad.is_sold === undefined) {
    ad.is_sold = false
  }
  const router = useRouter();
  const token = parseCookies().motorsShopToken
  const [cardUser, setCardUser] = useState<iUser | null>(null);
  const { pathname } = router;
  const getAdUser = useCallback(async () => {
    try {
      const response = await api.get(`users/${ad.user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCardUser(response.data);
    } catch (error) {
      console.error(error);
    }
  },[ad, token])

  useEffect(() => {getAdUser().catch(console.error)}, [getAdUser])


  return (
    <div className="w-[312px] h-[420px] flex flex-col">
      <div className="h-[152px]">
        <div className="bg-grey-7 border-2 grey-7 relative hover:border-brand-1 flex justify-center">
          {pathname === "/user" &&
            (ad.is_sold === true ? (
              <button className="flex justify-center items-center px-[8px] h-[24px] absolute top-[11px] left-[16px] bg-brand-1 text-white body-2-500">
                Ativo
              </button>
            ) : (
              <button className="flex justify-center items-center px-[8px] h-[24px] absolute top-[11px] left-[16px] bg-grey-4 text-white body-2-500">
                Inativo
              </button>
            ))}
          <Image
            width={262}
            height={150.28}
            src={"/CarroCard.svg"}
            alt="Card do Carro"
          />
          {ad.price < ad.priceFIPE && pathname === "/" ? (
            <p className="flex justify-center w-[15px] h-[27px] absolute top-0 right-0 bg-random-7 text-white">
              $
            </p>
          ) : null}
        </div>
        <div className="space-y-3">
          <p className="body-1-600 truncate">
            {ad.brand} - {ad.model}
          </p>
          <p className="body-1-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          {pathname !== "/admin" && (
            <div className="flex items-center space-x-2">
              <p className="h-8 w-8 rounded-full bg-purple-950 gray-0 text-white flex items-center justify-center">
                {cardUser?.name.charAt(0)}
              </p>
              <p>{cardUser?.name}</p>
            </div>
          )}
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                {ad.km}KM
              </button>
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                {ad.year}
              </button>
            </div>
            <p className="heading-7-600">R${ad.price}</p>
          </div>
          {pathname === "/admin" && (
            <div className="flex flex-row gap-[16px]">
              <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">
                Editar
              </button>
              <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">
                Detalhes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
