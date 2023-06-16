import Image from 'next/image';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

export const FooterComponete = () =>{

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-grey-0 w-full flex flex-col items-center justify-center h-[310px] md:h-[140px] md:flex-row ">
      <div className='layout flex flex-col items-center h-[220px] md:h-fit md:flex-row md:w-[93.5%] justify-between'>
        <Image src='/images/logo-white.png' alt='logo motors shop' width={153} height={26}/>

        <p className='text-[0.875rem] font-normal leading-[1.5rem] text-white'>© 2022 - Todos os direitos reservados.</p>


        <button
        onClick={scrollToTop}
        className='w-[53px] h-[50px] bg-grey-1 hover:bg-grey-2 rounded-[4px] flex items-center justify-center md:ml-[100px]'>
          <MdOutlineKeyboardArrowUp className='fill-slate-50 font-extrabold text-[25px]'/>
        </button>
      </div>
    </footer>
  )
}
