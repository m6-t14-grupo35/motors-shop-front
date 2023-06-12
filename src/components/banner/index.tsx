import Image from 'next/image';

export const Banner = () => {
  return (
      <div className="flex flex-col items-center overflow-hidden
       md:justify-center h-[625px] md:h-[575px] lg:h-[537px]
       aw-screen bg-gradient-to-b from-neutral-400 from-20% to-black ">
        <div className=" my-[76px] md:my-0 z-20 flex flex-col items-center gap-4 max-w-[90%] md:max-w-none md:absolute">
          <h1 className="text-[2rem] font-medium leading-[2.6rem] md:text-[2rem] md:font-bold md:leading-[2.5rem] lg:text-[2.75rem] lg:font-bold lg:leading-[3.5rem] text-white ">Motors Shop</h1>
          <p className="text-[1.5rem] font-medium leading-[1.875rem] lg:text-[2.25rem] lg:font-semibold lg:leading-[2.81rem] text-center text-white tracking-wide">A melhor plataforma de anúncios de carros do país</p>
        </div>

          <Image src="/images/carro-banner.png" alt="carro esportivo azul" width={540} height={0}
          className="mt-[-60px]  h-[308px] w-[640px]
          md:mt-0 md:relative md:bottom-[-80px] lg:bottom-[-120px] md:scale-[1.3]  lg:scale-[1.8]
          object-none opacity-[0.6] brightness-[0.8]" />

      </div>
  );
}

