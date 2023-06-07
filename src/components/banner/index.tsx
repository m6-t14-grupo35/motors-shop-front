import Image from 'next/image';

export const Banner = () => {
  return (
      <div className="flex flex-col items-center md:justify-center h-[625px] md:h-[575px] lg:h-[537px] w-screen bg-gradient-to-b from-neutral-400 from-20% to-black ">
        <div className=" my-[76px] md:my-0 z-20 flex flex-col items-center gap-4 max-w-[90%] md:max-w-none lg:absolute">
          <h1 className="heading-3-500 md:text-blue-700 lg:text-pink-600 md:heading-2-600 lg:heading-1-700 font-bold text-white">Motors Shop</h1>
          <p className="heading-5-500 md:heading-2-600 lg:heading-1-700 text-center font-bold text-white">A melhor plataforma de anúncios de carros do país</p>
        </div>

        <Image src="/images/carro-banner.png" alt="carro esportivo azul" width={500} height={0} className="mt-[-60px] scale-107 md:mt-[50px] md:scale-[1.3] lg:scale-[1.6] w-[550px] h-[304px] object-none opacity-80 brightness-50" />
      </div>
  );
}

