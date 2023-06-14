import Image from "next/image";

export const AdCard = () => {
  return (
    <div className="w-[312px] h-[420px] flex flex-col">
      <div className="h-[152px]">
        <div className="bg-grey-7 border-2 grey-7  hover:border-brand-1 flex justify-center">
          <Image
            width={262}
            height={150.28}
            src={"/CarroCard.svg"}
            alt="Card do Carro"
          />
        </div>
        <div className="space-y-3">
          <p className="body-1-600">Product title stays here - max 1 line</p>
          <p className="body-1-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div className="flex items-center space-x-2">
            <p className="h-8 w-8 rounded-full bg-purple-950 gray-0"></p>
            <p>Anunciante</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-3">
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                0KM
              </button>
              <button className="bg-brand-4 text-brand-1 rounded py-1 px-2">
                2019
              </button>
            </div>
            <p className="heading-7-600">R$00.000,00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
