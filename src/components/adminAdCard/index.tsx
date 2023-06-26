import Image from "next/image";
import { useState } from "react";

const user = {
  name: "Caio",

};

interface iAd {
  brand: string;
  model: string;
  year: string;
  km: number;
  price: number;
  description: string;
  isSold: boolean;
}

export const AdminAdCard = () => {
  const [modal, setModal] = useState(null)
  return (
    <div className="w-[312px] h-[420px] flex flex-col">
      <div className="h-[152px]">
        <div className="bg-grey-7 border-2 grey-7 relative hover:border-brand-1 flex justify-center">
          <Image
            width={262}
            height={150.28}
            src={"/CarroCard.svg"}
            alt="Card do Carro"
          />
        </div>
        <div className="space-y-3">
          <p className="heading-7-600 truncate">
            Product title stays here - max 1 line
          </p>
          <p className="body-2-400 text-grey-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2 body-2-500">
                0KM
              </button>
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2 body-2-500">
                2019
              </button>
            </div>
            <p className="heading-7-500">R$00.000,00</p>
          </div>
          <div className="flex flex-row gap-[16px]">
            <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">Editar</button>
            <button className="flex justify-center items-center py-[12px] px-[20px] h-[38px] border-2 border-black rounded">Detalhes</button>
          </div>
        </div>
      </div>
    </div>
  );
};
